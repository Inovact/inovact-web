const express = require('express');
const router = express.Router();
const Idea = require('../../models/Idea');
const requireLogin = require('../../middlewares/requireLogin');

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

router.post('/postidea', requireLogin, (req, res) => {
  const { title, description } = req.body;
  let { tags } = req.body;

  if (!tags) {
    tags = '["inovact"]';
  }

  const idea = new Idea({
    title: title,
    description: description,
    tags: tags,
    userId: req.user._id,
  });
  idea
    .save()
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
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

module.exports = router;
