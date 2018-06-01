var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var csp = require('helmet-csp');
var index = require('./spa_root_page');

/**
 * Create a server with the given configuration. 
 * 
 * @param {string} mountpath - the first part of the path after the server name 
 * @param {json} config - json configuration for the blog 
 */
function server(mountpath, config) {

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

    app.use(mountpath, express.static(path.join(__dirname, '../public')));

    app.use(`${mountpath}/simple-react-router.js.map`, function(req,res) {
        res.sendFile(path.join(__dirname, '../../node_modules/@chanoch/simple-react-router/dist/simple-react-router.js.map'));
    });

    app.use(`${mountpath}/config.json`, function(req, res) {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(config);
        res.end();
    })

    indexPage = index(mountpath);
    app.use(`${mountpath}/`, indexPage);
    app.use(`${mountpath}/*.html`, indexPage);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req,res,next) {
        next(err);
    });
    return app;
}

module.exports = server;