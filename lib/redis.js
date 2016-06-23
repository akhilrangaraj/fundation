'use strict';

var debug          = require('debug')('fundation:redis');
var redis          = require('redis');

//
// MySQL
//
module.exports = function(app) {

  // Check if there is any configuration for MySQL
  var server = app.get('config').redis;
  if ( !server ) {
    return;
  }

  debug('Setting up Redis');

  var client = redis.createClient({
    host: server.host,
    port: server.port
  });

  client.on('error', function(err) {
    console.error('Redis error: ' + err);
  });

  // Expose a function to get the connection pool
  app.set('redis', client);

};