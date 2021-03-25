var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
//var cors = require('cors')

// set app
var app = express();

// settings
//app.set('port', process.env.PORT || '3000');
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
}, 'single')); 
app.use(express.urlencoded({extended: false}));
//app.use(cors())

//Routes

app.use('/api/',require('./src/routes/api'));
app.use('/fire-up/',require('./src/routes/fire-up'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));



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
