/**
 * Module dependencies.
 */

var debug = require('debug')('clearblog:server');
var http = require('http');
var Promise = require('bluebird');

/**
 * Create a blog as a separate Express.js instance.
 * 
 * 1) The port and mountpath can be provided in the optional parameters.
 * 
 * For example, calling the function with clearblog({port}, {mountpath}) will result in the blog
 * being available at:
 * 
 * https://test.com:{port}/{mountpath} 
 * 
 * 2) You can define these as environment variables.
 * 
 * For example calling CLEARBLOG_PORT=3020 CLEARBLOG_MOUNTPATH=blog npm start will give:
 * 
 * https://test.com:{CLEARBLOG_PORT}/{CLEARBLOG_MOUNTPATH}
 * 
 * 3) If you provide neither, the blog will be mounted at:
 * 
 * https://test.com:3005/clearblog
 * 
 * @param {number} port - the port to mount to, 3005 if not defined
 * @param {string} mountpath - the path to mount the blog to. 
 */
function clearblog(config, portParam, mountpathParam) {
  var port = normalizePort(portParam);
  var mountpath = normalizeMountpath(mountpathParam);
  config.mountpath = mountpath;

  console.log(`
  -- Starting clearblog.
  -- Mounting clearblog to http://{servername}:${port}${mountpath}
  
  If you are not sure what the server name is, try one of these:
  
  http://localhost:${port}${mountpath}
  http://127.0.0.1:${port}${mountpath}  
  
  `);

  var app = require('./clearblog-server')(config);

  app.set('port', port);

  /**
   * Create HTTP server.
   */

  var server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on('error', onError(port));
  server.on('listening', onListening(server));
}

/**
 * Normalize a port into a number.
 * 
 * - If provided as an environment variable CLEARBLOG_PORT, use that.
 * - If provided as parameter to the function, use that.
 * - Otherwise default to 3005
 */

function normalizePort(val) {
    var port = parseInt(val, 10); // base 10
    return process.env.CLEARBLOG_PORT||port||3005;
}

/**
 * The path on which to mount the blog. 
 * 
 * - If defined as env variable CLEARBLOG_MOUNTPATH use it
 * - If defined as param to function, use that
 * - Default to /clearblog 
 * 
 * @param {string} mountpath - first part of the uri - e.g. https://test.com/{mountpath}/ 
 */
function normalizeMountpath(mountpath) {
  var path = process.env.CLEARBLOG_MOUNTPATH||mountpath||"clearblog";
   return path.endsWith('/')?path.substring(0,path.indexOf('/')):path;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(port) {
  return function(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(server) {
  return function() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);  
  }
}

module.exports = clearblog;
