var http = require('http');
var handler = require('./lib/handler');
var server = http.createServer(handler);
server.listen(4040);
