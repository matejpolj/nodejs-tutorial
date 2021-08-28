var http = require('http');
var url = require('url');

http.createServer( function ( req, res ) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true).querty;
  try {
    var txt = q.year + " " + q.month;
  } catch (e) {
    res.write("Napaka!");
  } finally {

  }
  res.end(txt);
}).listen(8080);


// ne dela for some reason
