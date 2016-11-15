var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cookieSession = require('cookie-session');
var session = require('express-session');
//var RedisStore = require('connect-redis')(session);

var routes = require('./routes/index');
var users = require('./routes/users');
var products = require('./routes/products');
var admins = require('./routes/admins');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploadfiles')));  // 需要改到自己创建文件夹下面F:\\test\\test\\
//缓存session信息
app.use(session({
    secret: "123456789",
    name: 'changke_session',      //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 999999999},  //即999999999ms后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true

}));




app.use('/', routes);
app.use('/users', users);
app.use('/products', products);
app.use('/admins', admins);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
