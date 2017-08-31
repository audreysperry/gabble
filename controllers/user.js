var User = {
  login: function(req, res) {
    res.render('login/welcome', {
      messages: res.locals.getMessages()
    });
  },

  signup: function(req, res) {
    res.render('login/signup', {
      messages: res.locals.getMessages()
    });
  },

  logout: function(req, res) {
    req.session.destroy(function(err){
      res.redirect('/');
    });
  }


};

module.exports = User;
