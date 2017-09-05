const models = require('../models');
const moment = require('moment');

GabbleController = {
  createForm: function(req, res) {
    res.render('profile/create');
  },

  home: function(req, res) {
    models.Post.findAll({
      include: [
        {model: models.User}
      ],
      order: [['createdAt', 'DESC']]
    }).then(function(posts){
      posts.forEach(function(post){
        date = moment(post.createdAt, moment.ISO_8601).calendar();
        post.posted = date;
      });
      user = req.user.username;
      console.log("this is the current user", user);
      res.render('profile/home', {posts: posts, user: user});
    });

  },

  create: function(req, res) {
    models.User.findOne({
      where: {id: req.user.id}
    }).then(function(user) {
      let newPost = models.Post.create({
        post: req.body.newGab,
        userId: user.id
      });
    }).then(function() {
      res.redirect('/gabble/home');
    })
  }




};


 module.exports = GabbleController;
