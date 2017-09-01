const models = require('../models');

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
      posts.forEach(posts){
        date= moment(post.createdAt, moment.ISO_8601).calendar();
      }
      console.log('user here', posts[0].User.dataValues.username);
      res.render('profile/home', {posts: posts});
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
