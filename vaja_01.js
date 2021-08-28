var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello world!');
  res.write("The date and time is currently: " + dt.myDateTime());
  res.end();
  console.log('This is example of some text!')
}).listen(8080);
