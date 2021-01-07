const express = require("express");
const router = express.Router();
const requireLogin = require("../../middlewares/requireLogin");
const Project = require("../../models/Project");
const User = require("../../models/User");

router.get("/currentUser/:userId", requireLogin, (req, res) => {
  User.findById(req.params.userId).then((result) => {
    res.json(result);
  });
});

router.get("/user/:id", requireLogin, (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-password")
    .then((user) => {
      Project.find({ userId: req.params.id })
        .populate("userId", "id firstname")
        .exec((err, project) => {
          if (err) {
            return res.status(422).json({ error: err });
          }
          res.json({ user, project });
        });
    })
    .catch((err) => {
      return res.status(404).json({ error: "user not found" });
    });
});

router.put("/follow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        {
          new: true,
        }
      )
        .then((result) => res.json(result))
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});

router.put("/unfollow", requireLogin, (req, res) => {
  User.findByIdAndUpdate(
    req.body.unfollowId,
    {
      $pull: { followers: req.user._id },
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.unfollowId },
        },
        {
          new: true,
        }
      )
        .then((result) => res.json(result))
        .catch((err) => {
          return res.status(422).json({ error: err });
        });
    }
  );
});
module.exports = router;
