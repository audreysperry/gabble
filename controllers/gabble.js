const models = require('../models');
const moment = require('moment');

GabbleController = {
  createForm: function(req, res) {
    res.render('profile/create');
  },

  home: function(req, res) {
    models.Post.findAll({
      include: [models.User, {model: models.Like, include: {model: models.User, as: "liker"}}],
      order: [['createdAt', 'DESC']]
    }).then(function(posts){
      posts.forEach(function(post){
        post.isCurrentUser = false;
        date = moment(post.createdAt, moment.ISO_8601).calendar();
        post.posted = date;
        if (post.User.dataValues.username == req.user.username) {
          post.isCurrentUser = true;
        }
      });
      user = req.user.username;
            res.render('profile/home', {posts: posts, user: user});
    });

  },

  create: function(req, res) {
      let newPost = models.Post.create({
        post: req.body.newGab,
        userId: req.user.id
      }).then(function(post) {
        res.redirect('/gabble/home');
      });
    },


  like: function(req, res) {
    let newLike = models.Like.create({
      liked: true,
      userId: req.user.id,
      postId: req.params.id
    }).then(function(like) {
      res.redirect('/gabble/home');
    })
  },

  delete: function(req, res) {
    models.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.redirect('/gabble/home');
    });
  },

  displayLikes: function(req, res) {
    let id = req.params.id;
    models.Post.findOne({
      where: {
        id: id
      },
        include: [models.User, {model: models.Like, include: {model: models.User, as: "liker"}}]
    }).then(function(post){
      date = moment(post.createdAt, moment.ISO_8601).calendar();
      post.posted = date;
        res.render('profile/likes', {post: post})
    })
  }




};


 module.exports = GabbleController;
