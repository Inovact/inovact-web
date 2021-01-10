const express = require('express');
const router = express.Router();
const Idea = require('../../models/Idea');
const requireLogin = require('../../middlewares/requireLogin');
const helpers = require("../../helpers/helpers");
const multer = require("multer");
const upload = multer();

router.get('/getallideas', (req, res) => {
  Idea.find()
    .populate('userId', '_id firstname')
    .populate('comments.postedBy', '_id firstname')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get('/myideas', requireLogin, (req, res) => {
  Idea.find({ userId: req.user._id })
    .populate('userId', '_id firstname email')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

// router.post('/postidea', requireLogin, (req, res) => {
//   const { title, description } = req.body;
//   let { tags } = req.body;

//   if (!tags) {
//     tags = '["inovact"]';
//   }

//   const idea = new Idea({
//     title: title,
//     description: description,
//     tags: tags,
//     userId: req.user._id,
//   });
//   idea
//     .save()
//     .then((data) => {
//       res.send({ data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.post("/postidea", requireLogin, upload.array('file', 5), async (req, res) => {
  const { title, description, tags } = req.body;
  const idea = new Idea({
    title: title,
    description: description,
    tags: tags,
    userId: req.user._id,
  });
  let doc1 = await idea
    .save()
    .catch((err) => {
      console.log(err);
  });

  let images = [];
  let videos = [];
  let files = [];

  req.files.forEach((file) => {
    switch (file.mimetype.split('/')[0]) {
      case ('image'):
        if (imageFileFilter(file.mimetype.split('/')[1])) {
          images.push(file);
        } else {
          files.push(file);
        }
        break;
      case ('video'):
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
    publicKey: keys.IMAGEKEIT_PUBLIC_KEY,
    privateKey: keys.IMAGEKEIT_PRIVATE_KEY,
    urlEndpoint: keys.IMAGEKIT_URI + 'idea_documents'
  });

  images.forEach((image) => {
    imagekit.upload({
      file: image.buffer,
      fileName: image.originalname.split('.')[0] + '_' + images.indexOf(image).toString() + '.' + image.originalname.split('.')[1],
      folder: '/idea_documents/' + doc1._id
    }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        Idea.findOne({_id:doc1['_id']}).then((idea) => {
          idea['images'].push(res);
          idea.save();
        });
      }
    });
  });

  videos.forEach((video) => {
    imagekit.upload({
      file: video.buffer,
      fileName: video.originalname.split('.')[0] + '_' + videos.indexOf(video).toString() + '.' + video.originalname.split('.')[1],
      folder: '/idea_documents/' + doc1._id
    }, (err, res) => {
      if (!err) {
        Idea.findOne({_id:doc1['_id']}).then((idea) => {
          idea['videos'].push(res);
          idea.save();
        });
      } else {
        console.log(err);
      }
    });
  });

  Idea.findOne({_id:doc1['_id']}).then((idea) => {
    idea['files'] = idea['files'].concat(files)
    idea.save();
  });

  res.status(200).json({ success: true });
});

router.put('/like', requireLogin, (req, res) => {
  Idea.findByIdAndUpdate(
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
        console.log('server', result);
        res.json(result);
      }
    });
});
router.put('/unlike', requireLogin, (req, res) => {
  console.log(req.body);

  Idea.findByIdAndUpdate(
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
        console.log(err);
        return res.status(403).json({ error: err });
      } else {
        console.log('server', result);
        res.json(result);
      }
    });
});
router.put('/comment', requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Idea.findByIdAndUpdate(
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

router.delete("/deleteidea/:ideaId", requireLogin, (req, res) => {
  Idea.findOne({ _id: req.params.projectId })
    .populate("userId", "_id")
    .exec((err, idea) => {
      if (err || !idea) {
        return res.status(422).json({ error: err });
      }
      if (idea.userId._id.toString() === req.user._id.toString()) {
        // Delete the folder containing the images of this project
        helpers.deleteFolder('idea_documents/' + req.params.ideaId + '/', function(result) {
          if (result.success) {
            idea
            .remove()
            .then((result) => {
              res.json({ message: "successfully deleted", result });
            })
            .catch((err) => {
              console.log(err);
            });
          } else {
            res.status(500);
            res.send({msg: res.msg});
          }
        });
      } else {
        res.status(403);
        res.send({msg:"You cannot only delete idea created by you."});
      }
    });
});

module.exports = router;
