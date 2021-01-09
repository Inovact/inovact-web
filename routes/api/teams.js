const express = require('express');
const router = express.Router();
const team = require('../../models/teams');
const requireLogin = require('../../middlewares/requireLogin');
const nodemailer = require('nodemailer');
const User = require('../../models/User');
const projects = require('../../models/Project');
const Token = require('../../models/Tokens');
const crypto = require('crypto');
const fs = require('fs');
const handlebars = require('handlebars');
const mongoose = require('mongoose');

router.get('/getteam/:projectId', requireLogin, (req, res) => {
  team
    .find({ projectid: req.params.projectId }, '-creationdate -__v')
    .populate('members.userid', 'firstname lastname')
    .exec(function (err, team) {
      res.send(JSON.stringify(team, null, '\t'));
    });
});

router.get('/getteams/:userId', requireLogin, (req, res) => {
  team
    .find({ 'members.userid': req.params.userId })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

let readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

router.get('/invitemembers', async function (req, res) {
  let members;
  if (typeof req.body.members == 'string') {
    members = [req.body.members];
  } else {
    members = req.body.members;
  }
  const filter = { projectid: req.body.projectid };
  let project = await projects.findById(filter.projectid);
  let admin = await User.findById({ _id: project.userId }, 'firstname');

  let doc = await User.find().where('_id').in(members);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carca.inc@gmail.com',
      pass: '@CarcaGoogle314',
    },
  });

  for (let i = 0; i < doc.length; i++) {
    let tokenC = new Token({
      _userId: doc[i]._id,
      projectId: project._id,
      token: crypto.randomBytes(16).toString('hex'),
    });

    tokenC.save(function (err) {
      if (err) {
        return res.status(500).json({ msg: err.message });
      }

      readHTMLFile('static/acceptTeamInvitationTemplate.html', function (
        err,
        html
      ) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        let template = handlebars.compile(html);
        let replacements = {
          firstname: doc[i].firstname,
          lastname: doc[i].lastname,
          admin: admin.firstname,
          projectTitle: project.title,
          token: tokenC.token,
        };
        let htmlToSend = template(replacements);

        const mailOption = {
          from: 'afifahmed456123@gmail.com',
          to: doc[i].email,
          subject: 'Invitation to collborate',
          html: htmlToSend,
        };

        transporter.sendMail(mailOption, function (err, data) {
          if (err) {
            console.log('error', err);
          } else {
            res.status(200).json({ success: true });
          }
        });
      });
    });
  }
});

router.get('/requestjoin/:projectId', requireLogin, async (req, res) => {
  const projectId = req.params.projectId;
  const userId = req.user._id;
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'carca.inc@gmail.com',
      pass: '@CarcaGoogle314',
    },
  });

  projects.findById(projectId, function (err, project) {
    team.findOne({ projectid: projectId }, 'members', function (err, temp) {
      let adminId;
      for (let i = 0; i < temp.members.length; i++) {
        if (temp.members[i].role === 'admin') adminId = temp.members[i].userid;
      }
      User.findById(adminId, function (err, admin) {
        let tokenC = new Token({
          _userId: userId,
          projectId: projectId,
          token: crypto.randomBytes(16).toString('hex'),
        });

        tokenC.save(function (err) {
          if (err) {
            return res.status(500).json({ msg: err.message });
          }

          readHTMLFile('static/requestJoinTemplate.html', function (err, html) {
            if (err) {
              console.log(err);
              return res.status(500).send(err);
            }
            let template = handlebars.compile(html);
            User.findById(userId, 'firstname lastname', function (err, member) {
              let replacements = {
                firstname: admin.firstname,
                lastname: admin.lastname,
                memberFirstName: member.firstname,
                memberLastName: member.lastname,
                projectTitle: project.title,
                token: tokenC.token,
                userId: member._id,
              };
              let htmlToSend = template(replacements);

              const mailOption = {
                from: 'afifahmed456123@gmail.com',
                to: admin.email,
                subject: 'Request to collaborate',
                html: htmlToSend,
              };

              transporter.sendMail(mailOption, function (err, data) {
                if (err) {
                  console.log('error', err);
                } else {
                  res.status(200).json({ success: true });
                }
              });
            });
          });
        });
      });
    });
  });
});

// @TODO: Needs to be written strictly
router.get('/acceptinvite', function (req, res) {
  Token.findOne(
    {
      token: req.query.token,
    },
    function (err, token) {
      if (!token) {
        return res.status(400).send({
          type: 'Failed to join team',
          msg: 'we were unable to confirm',
        });
      } else if (token.expired === true) {
        return res
          .status(400)
          .send({ type: 'Failed to join team', msg: 'Ivitation has expired' });
      }

      const filter = { projectid: token.projectId };

      team.findOne(filter, 'members', function (err, team) {
        if (err) {
          return res.status(500).send('Could not find team');
        }
        if (
          team.members.some(function (currValue) {
            return token.__userId === currValue.userid;
          })
        ) {
          return res.status(500).send('You are already in the team!');
        }

        team.members.push({ userid: token._userId });

        team.save(function (err) {
          if (err) {
            return res.status(500).send({ msg: err.mesage });
          }
          token.expired = true;
          token.save(function (err) {
            if (err) {
              return res.status(500).send({ msg: err.mesage });
            }
            const message = 'Successfully joined the team!';
            return res.redirect(
              'https://inovact.herokuapp.com/confirmed?message=' + message
            );
          });
        });
      });
    }
  );
});

// @TODO: Needs to be written strictly
// Need to redirect admnin to requestee's profile so that admin can view his profile and only then accpet his request
router.get('/acceptrequest', function (req, res) {
  
  Token.findOne(
    {
      token: req.query.token,
    },
    function (err, token) {
      if (!token) {
        return res.status(400).send({
          type: 'Failed to join team',
          msg: 'we were unable to confirm',
        });
      } else if (token.expired === true) {
        return res.status(400).send({
          type: 'Failed to accept request',
          msg: 'Request has expired',
        });
      }

      //filter
      const filter = { projectid: token.projectId };

      team.findOne(filter, 'members', function (err, team) {
        if (err) {
          return res.status(500).send('Could not find team');
        } else if (
          team.members.some(function (currValue) {
            return token._userId === currValue.userid;
          })
        ) {
          return res.status(500).send('User is already in the team!');
        }

        team.members.push({ userid: token._userId });

        team.save(function (err) {
          if (err) {
            return res.status(500).send({ msg: err.message });
          }
          token.expired = true;
          token.save(function (err) {
            if (err) {
              return res.status(500).send({ msg: err.message });
            }
            // return res.render(
            //   'https://inovact.herokuapp.com/login'
            // );
            console.log("Done");
            return res.redirect("https://inovact.herokuapp.com");
          });
        });
      });
    }
  );
});

router.put('/deletemembers', requireLogin, async function (req, res) {
  let users;
  if (typeof req.body.members == 'string') {
    users = [req.body.users];
  } else {
    users = req.body.users;
  }
  const filter = { projectid: req.body.projectid };

  let doc = await team.findOne(filter, 'members', function (err, team) {
    if (err) {
      res.status(500).send('Internal server error');
    }
    for (let i = 0; i < users.length; i++) {
      team.members.userid(users[i]).remove();
    }

    team.save();
  });
});

router.put('/editTeamName', requireLogin, async function (req, res) {
  const filter = { _id: req.body.teamid };
  const update = { teamname: req.body.teamname };

  await team.findOneAndUpdate(filter, update);

  res.status(200).json({
    success: true,
  });
});

module.exports = router;
