var http = require('http');
var fs = require('fs');

var DAY = "day";
var NIGHT = "night";



var server = {
   var main = function (file, content_type){
      fs.readFile(file, 'utf8', function (err, data) {
         res.writeHead(200, { 'Content-Type': content_type});
         res.end(data);
      });
   }

   var get_time = function (){
      var hour = new Date().getHours();
      var time = hour > 6 && hour < 20 ? DAY : NIGHT;
      return time
   }
/*  requestHandler: function (req, res) {
    if (req.url === "/") {
      fs.readFile('index.html', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else if (req.url === "/client.js") {
      fs.readFile('client.js', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data);
      });
    } else if (req.url === "/canvas-renderer.js") {
      fs.readFile('canvas-renderer.js', 'utf8', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data);
      });
    } else if (req.url === "/time.json") {
      res.writeHead(200, { 'Content-Type': 'application/json' });

      var hour = new Date().getHours();
      var time = hour > 6 && hour < 20 ? DAY : NIGHT;

      res.end('{ "time": "' + time + '" }');
    }
  }*/
};

http.createServer(server.requestHandler).listen(4000);

exports.server = server;
