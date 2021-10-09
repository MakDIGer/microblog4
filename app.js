var createError = require('http-errors');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var hbs = require('hbs');
var expHbs = require('express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feedbackRouter = require('./routes/feedback');
const keys = require('./config/db');

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB has been connected!'))
    .catch(error => console.log(error));

var app = express();
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', expHbs({
  layoutsDir: "views",
  defaultLayout: "layout",
  extname: "hbs",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  },
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  }
}));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feedback', feedbackRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
