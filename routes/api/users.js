const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const jwt_decode = require('jwt-decode');
// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validateProfileEditInput = require('../../validation/profileEdit');
// Load User model
const User = require('../../models/User');
const Token = require('../../models/Tokens');
const fs = require('fs');
const handlebars = require('handlebars');
const requireLogin = require('../../middlewares/requireLogin');

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

router.put('/profileEdit', requireLogin, async function (req, res) {
  // const { errors, isValid } = validateProfileEditInput(req.body);
  const firstname = typeof (req.body.firstname) == "string" && req.body.firstname.trim().length > 0 ? req.body.firstname : false,
    lastname = typeof (req.body.lastname) == "string" && req.body.lastname.trim().length > 0 ? req.body.lastname : false,
    dob = typeof (req.body.dob) == "string" && req.body.dob.trim().length > 0 ? req.body.dob : false,
    pic = typeof (req.body.pic) == "string" && req.body.pic.trim().length > 0 ? req.body.pic : false;
  if (firstname || lastname || dob || pic) {
    const filter = {
      _id: jwt_decode(String(req.headers.authorization).slice(7)).id,
    };
    const update = {};
    if (firstname) update.firstname = firstname;
    if (lastname) update.lastname = lastname;
    if (dob) update.dob = dob;
    if (pic) update.dob = pic;

    const user = await User.findOneAndUpdate(filter, update, { new: true });

    // user = await User.findOne(filter);
    const payload = {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      followers: user.followers,
      following: user.following,
      pic: user.profilePic,
    };
    let tokenC = new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString('hex'),
    });
    jwt.sign(
      payload,
      keys.secretOrKey,
      {
        expiresIn: 31556926, // 1 year in seconds
      },
      (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token,
          conformationToken: tokenC,
        });
      }
    );
  } else {
    res.status(400).json({
      "message": "At least one update field is required."
    });
  }
});

//route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    console.log({ user });
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save(function (err) {
            if (err) {
              return res.status(500).json({ msg: err.message });
            } else {
              let tokenC = new Token({
                _userId: newUser._id,
                token: crypto.randomBytes(16).toString('hex'),
              });

              // console.log(tokenC);

              tokenC.save(function (err) {
                if (err) {
                  return res.status(500).json({ msg: err.msg });
                }
                readHTMLFile('static/confirmationMailTemplate.html', function (
                  err,
                  html
                ) {
                  if (err) {
                    console.log(err);
                    return res.status(500).send(err);
                  }
                  var template = handlebars.compile(html);
                  var replacements = {
                    firstname: newUser.firstname,
                    lastname: newUser.lastname,
                    token: tokenC.token,
                  };
                  var htmlToSend = template(replacements);

                  const transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                      user: 'carca.inc@gmail.com',
                      pass: '@CarcaGoogle314',
                    },
                  });

                  const mailOption = {
                    from: 'afifahmed456123@gmail.com',
                    to: newUser.email,
                    subject: 'Invitation to Collaborate',
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
        });
      });
    }
  }).catch(err => console.log(err));
});

router.post('/confirm', (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) return res.send(err);
      const verified = user.isVerified;
      res.status(200).send({ type: 'verification', msg: verified });
    }
  );
});

router.get('/confirmation/:token', (req, res) => {
  Token.findOne(
    {
      token: req.params.token,
    },
    function (err, token) {
      if (!token)
        return res
          .status(400)
          .send({ type: 'not verified', msg: 'we were unable to confirm' });
      else if (token.status == true) {
        return res
          .status(400)
          .send({ type: 'Failed to confirm email', msg: 'Token expired' });
      }
      User.findOne({ _id: token._userId }, function (err, user) {
        //Verify and save the user
        user.isVerified = true;
        user.save(function (err) {
          if (err) {
            return res.status(500).send({ msg: err.message });
          }
          token.staus = true;
          token.save(function (err) {
            if (err) {
              return res.status(500).send({ msg: err.message });
            }
            const message = 'Account has been verified successfully!';
            res.redirect(
              'https://inovact.herokuapp.com/confirmed?message=' + message
            );
          });
        });
      });
    }
  );
});
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public

router.post('/login', (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          followers: user.followers,
          following: user.following,
          pic: user.profilePic,
          interests: user.interests,
        };
        let tokenC = new Token({
          _userId: user._id,
          token: crypto.randomBytes(16).toString('hex'),
        });

        if (!user.isVerified) {
          return res
            .status(404)
            .json({ notVerified: 'your account has not been verified' });
        } else {
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926, // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token,
                conformationToken: tokenC,
              });
            }
          );
        }
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    }).catch(err => console.log(err));
  }).catch(err => console.log(err));
});

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { session: false }),
  function (req, res) {
    const payload = {
      id: req.user._id,
      firstname: req.user.firstname,
      lastname: req.user.lastname,
      email: req.user.email,
      followers: req.user.followers,
      following: req.user.following,
      pic: req.user.profilePic,
      interest: req.user.interest,
    };

    // In jwt.sign set the data that you want to get

    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 });

    const token2 = 'Bearer ' + token;

    redirectURL = 'https://inovact.herokuapp.com/serialize/' + token2;
    // }
    res.redirect(redirectURL);
  }
);

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  function (req, res) {
    const payload = {
      id: req.user._id,
      firstname: req.user.firstname,
    };
    let tokenC = new Token({
      _userId: req.user._id,
      token: crypto.randomBytes(16).toString('hex'),
    });
    if (!req.user.isVerified) {
      return res
        .status(404)
        .json({ notVerified: 'your account has not been verified' });
    }

    // In jwt.sign set the data that you want to get
    const token = jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 });
    // const bearerToken = `Bearer ${token}`;

    const redirectURL =
      'https://inovact.herokuapp.com/serializeUser?jwtToken=' + token;

    res.redirect(redirectURL);
  }
);

router.post('/reset-password', (req, res) => {
  let token = crypto.randomBytes(32).toString('hex');

  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) {
      return res.send({ error: 'Enter a valid email Id' });
    }
    user.passwordResetToken = token;
    user.passwordResetExpires = Date.now() + 3600000;
    user.save().then((result) => {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'carca.inc@gmail.com',
          pass: '@CarcaGoogle314',
        },
      });

      const mailOption = {
        from: 'no-reply@carca.inc.com',
        to: user.email,
        subject: 'Password Reset',
        html: `<p>You requested for password reset</p>
                <h5>Click<a href="https://inovact.herokuapp.com/reset/${token}">here</a> reset your password</h5>`,
      };

      transporter.sendMail(mailOption, function (err, data) {
        if (err) {
          console.log('error', err);
        } else {
          res.status(200).json({ success: true });
        }
      });
      return res.send({ data: result });
    });
  });
});

router.post('/new-password', (req, res) => {
  console.log(req.body);
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({
    passwordResetToken: sentToken,
    passwordResetExpires: { $gt: Date.now() },
  }).then((user) => {
    if (!user) {
      return res.status(422).json({ error: 'Try again token expired' });
    }
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        console.log(err);
      }
      bcrypt.hash(newPassword, salt, (err, hash) => {
        user.password = hash;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        user.save().then((savedUser) => {
          console.log(savedUser);
          res.json({ message: 'password updated successfully' });
        });
      });
    });
  });
});

router.post('/search-users', (req, res) => {
  console.log(req.body);
  let userPattern = RegExp('^' + req.body.query);
  User.find({ email: { $regex: userPattern } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.log(err));
});

router.post('/interests', requireLogin, (req, res) => {
  // parse the interests
  const interests = req.body.interests.split(',');

  User.findOneAndUpdate(
    { email: req.user.email },
    {
      $push: { interests: interests },
    }
  ).then(() => {
    // res.writeHead(200);
    res.send({ success: true });
  });
});

module.exports = router;
