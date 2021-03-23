const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');
const requireLogin = require('../../middlewares/requireLogin');
const team = require('../../models/teams');
const Pusher = require('pusher');
const Imagekit = require('imagekit');
const keys = require('../../config/keys');
const videoFileFilter = require('../../validation/videoFileValidator');
const imageFileFilter = require('../../validation/imageFileValidator');
const multer = require('multer');
const upload = multer();
const helpers = require('../../helpers/helpers');

const pusher = new Pusher({
  appId: '1039724',
  key: '0c010c6078e42e502679',
  secret: '84ed7247554d2a580319',
  cluster: 'ap2',
  encrypted: true,
});

router.get('/getproject/:projectId', (req, res) => {
  Project.findById(req.params.projectId)
    .populate('userId', 'firstname lastname')
    .populate('likes', 'firstname lastname')
    .populate('comments.postedBy', 'firstname lastname')
    .then((result) => {
      files = result['files'];
      result['files'] = [];
      files.forEach((file) => {
        result['files'].push(file.originalname);
      });
      res.send(JSON.stringify(result, null, '\t'));
    });
});

router.get('/getallprojects', requireLogin, (req, res) => {
  Project.find()
    .populate('userId', '_id firstname lastname email')
    .populate('comments.postedBy', '_id firstname lastname')
    .then((result) => {
      if (result instanceof Array) {
        result.forEach((project) => {
          files = project['files'];
          project['files'] = [];
          files.forEach((file) => {
            project['files'].push(file.originalname);
          });
        });
      } else {
        files = result['files'];
        result['files'] = [];
        files.forEach((file) => {
          result['files'].push(file.originalname);
        });
      }
      res.json(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/myprojects', requireLogin, (req, res) => {
  Project.find({ userId: req.user._id })
    .populate('userId', '_id firstname email')
    .then((result) => {
      if (result instanceof Array) {
        result.forEach((project) => {
          files = project['files'];
          project['files'] = [];
          files.forEach((file) => {
            project['files'].push(file.originalname);
          });
        });
      } else {
        files = result['files'];
        result['files'] = [];
        files.forEach((file) => {
          result['files'].push(file.originalname);
        });
      }
      res.json(result);
    })
    .catch((err) => res.status(400).send(err));
});

router.get('/getsubprojects', requireLogin, (req, res) => {
  Project.find({ userId: { $in: req.user.following } })
    .populate('userId', '_id firstname lastname')
    .populate('comments.postedBy', '_id firstname lastname')
    .then((result) => {
      if (result instanceof Array) {
        result.forEach((project) => {
          files = project['files'];
          project['files'] = [];
          files.forEach((file) => {
            project['files'].push(file.originalname);
          });
        });
      } else {
        files = result['files'];
        result['files'] = [];
        files.forEach((file) => {
          result['files'].push(file.originalname);
        });
      }
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

router.post(
  '/createproject',
  requireLogin,
  upload.array('file', 5),
  async (req, res) => {
    const { title, description, status } = req.body;

    let { tags } = req.body;
 

    if (!tags) {
      tags = '["inovact"]';
    }

    const project = new Project({
      title: title,
      description: description,
      status: status,
      tags: tags,
      userId: req.user._id,
    });

    let doc1 = await project.save().catch((err) => {
      console.log(err);
    });

    console.log(doc1);

    let images = [];
    let videos = [];
    let files = [];

    req.files.forEach((file) => {
      switch (file.mimetype.split('/')[0]) {
        case 'image':
          if (imageFileFilter(file.mimetype.split('/')[1])) {
            images.push(file);
          } else {
            files.push(file);
          }
          break;
        case 'video':
          if (videoFileFilter(file.mimetype.split('/')[1])) {
            videos.push(file);
          } else {
            files.push(file);
          }
          break;
        default:
          files.push(file);
      }
    });

    const imagekit = new Imagekit({
      publicKey: process.env.IMAGEKEIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKEIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URI + 'project_documents',
    });

    images.forEach((image) => {
      imagekit.upload(
        {
          file: image.buffer,
          fileName:
            image.originalname.split('.')[0] +
            '_' +
            images.indexOf(image).toString() +
            '.' +
            image.originalname.split('.')[1],
          folder: '/project_documents/' + doc1._id,
        },
        (err, res) => {
          if (err) {
            console.log(err);
          } else {
            Project.findOne({ _id: doc1['_id'] }).then((project) => {
              project['images'].push(res);
              project.save();
            });
          }
        }
      );
    });

    videos.forEach((video) => {
      imagekit.upload(
        {
          file: video.buffer,
          fileName:
            video.originalname.split('.')[0] +
            '_' +
            videos.indexOf(video).toString() +
            '.' +
            video.originalname.split('.')[1],
          folder: '/project_documents/' + doc1._id,
        },
        (err, res) => {
          if (!err) {
            Project.findOne({ _id: doc1['_id'] }).then((project) => {
              project['videos'].push(res);
              project.save();
            });
          } else {
            console.log(err);
          }
        }
      );
    });

    await Project.findOne({ _id: doc1['_id'] }).then((project) => {
      project['files'] = project['files'].concat(files);
      project.save();
    });

    const newTeam = new team({
      teamname: doc1.title,
      members: [
        {
          userid: doc1.userId,
          role: 'admin',
        },
      ],
      projectid: doc1._id,
    });

    let doc2 = await newTeam
      .save()
      .then((result) => {
        pusher.trigger('my-channel', 'my-event', {
          message: doc1.title,
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ error: err });
      });

    res.status(200).json({ success: true });
  }
);

router.put('/like', requireLogin, (req, res) => {
  Project.findByIdAndUpdate(
    req.body.postId,

    {
      $push: { likes: req.user.id },
    },
    {
      new: true,
    }
  )
    .populate('userId', '_id firstname lastname')
    .populate('comments.postedBy', '_id firstname')
    .exec((err, result) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put('/unlike', requireLogin, (req, res) => {
  Project.findByIdAndUpdate(
    req.body.postId,
    {
      $pull: { likes: req.user.id },
    },
    {
      new: true,
    }
  )
    .populate('userId', '_id firstname lastname')
    .populate('comments.postedBy', '_id firstname')
    .exec((err, result) => {
      if (err) {
        return res.status(404).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put('/comment', requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Project.findByIdAndUpdate(
    req.body.postId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate('userId', '_id firstname lastname')
    .populate('comments.postedBy', '_id firstname')
    .exec((err, result) => {
      if (err) {
        return res.status(404).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.delete('/deleteproject/:projectId', requireLogin, (req, res) => {
  Project.findOne({ _id: req.params.projectId })
    .populate('userId', '_id')
    .exec((err, project) => {
      if (err || !project) {
        return res.status(422).json({ error: err });
      }
      if (project.userId._id.toString() === req.user._id.toString()) {
        // Delete the folder containing the images of this project
        helpers.deleteFolder(
          'project_documents/' + req.params.projectId + '/',
          function (result) {
            if (result.success) {
              project
                .remove()
                .then((result) => {
                  team.deleteOne({ projectid: req.params.projectId }, (err) => {
                    if (!err) {
                      res.json({ message: 'successfully deleted', result });
                    } else {
                      res.status(500);
                      res.json({ msg: 'failed to delete the team' });
                    }
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              res.status(500);
              res.send({ msg: res.msg });
            }
          }
        );
      } else {
        res.status(403);
        res.send({ msg: 'You cannot only delete projects created by you.' });
      }
    });
});

module.exports = router;
