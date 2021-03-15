var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// set app
var app = express();

// settings
app.set('port', process.env.PORT || '3000');
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './src/public')));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'password',
  port: 3306,
  database: 'Fire-Up-DB'
}, 'single'))

//Routes
app.use('/api/',require('./src/routes/index'));
app.use('/api/Dashboard',require('./src/routes/dashboard'));
app.use('/api/lists',require('./src/routes/lists'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(app.get('port'), () => {
  console.log('server on port: 3000');
})


















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
