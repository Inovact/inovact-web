const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('../config/keys');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );

  // passport.serializeUser(function (user, done) {
  //     done(null, user.id);
  // });
  //
  // passport.deserializeUser(function (id, done) {
  //     User.findById(id, function (err, user) {
  //         done(err, user);
  //     })
  // })

  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE_APP_ID,
        clientSecret: keys.GOOGLE_APP_SECRET,
        callbackURL: '/api/users/auth/google/callback',
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne({ googleID: profile.id }).then(function (existingUser) {
          if (existingUser) {
            done(null, existingUser);
            // console.log("User already exists!");
          } else {
            new User({
              firstname: profile.name['givenName'],
              lastname: profile.name['familyName'],
              email: profile._json.email,
              googleID: profile.id,
              isVerified: true,
              profilePic: profile._json.picture,
              externalType: 'google',
              interest: [],
            })
              .save()
              .then(function (user) {
                done(null, user);
              });
          }
        });
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: keys.FACEBOOK_APP_ID,
        clientSecret: keys.FACEBOOK_APP_SECRET,
        callbackURL: '/api/users/auth/facebook/callback',
        profileFields: [
          'id',
          'displayName',
          'email',
          'birthday',
          'first_name',
          'last_name',
        ],
      },
      function (accessToken, refreshToken, profile, done) {
        User.findOne({ googleID: profile.id }).then(function (existingUser) {
          if (existingUser) {
            done(null, existingUser);
            console.log('User already exists!');
          } else {
            new User({
              firstname: profile.name['givenName'],
              lastname: profile.name['familyName'],
              email: profile._json.email,
              googleID: profile.id,
              isVerified: true,
              externalType: 'facebook',
            })
              .save()
              .then(function (user) {
                done(null, user);
              });
          }
        });
      }
    )
  );
};
