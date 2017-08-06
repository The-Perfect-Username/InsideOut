var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('models', path.join(__dirname, 'app/models'));

app.set('view engine', 'ejs');

app.use(
   sassMiddleware({
       src: __dirname + '/sass',
       dest: __dirname + '/public/stylesheets',
       prefix: '/public/stylesheets',
       outputStyle: 'compressed',
       debug: true,
   })
);

var index = require('./app/controllers/index');
var timeline = require('./app/controllers/timeline');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/public/javascripts', express.static(__dirname + '/public/javascripts'));

app.use('/', index);
app.use('/timeline', timeline);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
