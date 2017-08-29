const express = require('express');
const passport = require('passport');

const UserController = require('./controllers/user');
const GabbleController = require('./controllers/gabble');

module.exports = function(app) {

  const userRouter = express.Router();
  const gabbleRouter = express.Router();

  userRouter.post('/login/', passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login/',
        failureFlash: true
    }));

    userRouter.get('/signup/', UserController.signup);
    userRouter.post('/signup/', passport.authenticate('local-signup', {
      successRedirect: '/login/',
      failureRedirect: '/signup/',
      failureFlash: true
    }));


    userRouter.get('/', UserController.login);
    userRouter.get('/signup', UserController.signup);

    gabbleRouter.get('/create', GabbleController.create);

  app.use('/', userRouter);
  app.use('/gabble/', gabbleRouter);
};
