const express = require('express');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash-messages');
const bodyParser = require('body-parser');
const models = require('./models');
const routes = require('./router');



const app = express();

// config view and static layout
app.engine('handlebars', exphbs({
  defaultLayout: 'base'
}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));

// for body parser
app.use(bodyParser.urlencoded({extended: true}));

// passport user auth config

require('./controllers/passport');


// for Passport
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// Router
routes(app);


app.listen(3000);



module.exports = app;
