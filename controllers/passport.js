const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


passport.use('local-login', new LocalStrategy(
  {passReqToCallback: true},
  function(req, username, password, done) {
    User.authenticate(username, password, function(err, user) {
      if (err) {
        return done(err)
        console.log(err);
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false, {
          message: "There is no user with that username and password."
        })
      }
    })
  }));

passport.use('local-signup', new LocalStrategy(
  {passReqToCallback: true},
  function(req, username, password, done) {
    var skills = req.body.skills.split(',');
    User.signup({
      name: req.body.name,
      email: req.body.email,
      skills: skills,
      username: req.body.username,
      avatar: req.body.avatar,
      password: req.body.password,
      university: req.body.university,
      company: req.body.company,
      phone: req.body.phone,
      address: {
        street_num: req.body.street_num,
        street_name: req.body.street_name,
        city: req.body.city,
        state_or_province:req.body.state_or_province,
        country: req.body.country,
        postal_code: req.body.postal_code
      }
    }, function(err, user) {
      if (err) {
        return done(err)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false, {
          message: "There is already a user with username and password."
        });
      }
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
