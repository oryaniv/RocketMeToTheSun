const fs = require('fs'),
    http = require('http');


console.log('index running');
http.createServer(function (req, res) {

  console.log('server running...');

  fs.readFile(__dirname + req.url, function (err,data) {
    console.log('serving file ' + req.url);
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8081);