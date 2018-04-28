var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var csp = require('helmet-csp');

var app = express();

// if(process.env.NODE_ENV!=='production') {
//     var livereload = require('livereload').createServer({
//         debug: true
//     }); 
//     livereload.watch(__dirname + '/..');
// }

app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(function(req,res,next) {
//     console.log(req.originalUrl);
//     next();
// });

app.use('/clearblog', express.static(path.join(__dirname, '../public')));

app.use('/clearblog/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.htm'))
});

app.use('/clearblog/*.html', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.htm'))
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req,res,next) {
    next(err);
});

module.exports = app;