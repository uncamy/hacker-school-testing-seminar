var tester = require('./tester').tester;
var server = require('../server').server;
var http = require('http');

var mockRes = function(expectedString, done) {
  http.ServerResponse.prototype.end = function(data) {
    tester.isEqual(data.substring(0, expectedString.length),
                   expectedString);
    console.log("assertion checked");

    if (done !== undefined) {
      done();
    }
  };

  return new http.ServerResponse({});
};
//our first try
var stub_date = function(){
    Date.prototype.getHours = function(){
	return 10;
    }
}
tester.test(
    'should return day', function(done){
	stub_date();
	tester.isEqual (server.get_time(), 'day')
}


// Demo async tests
tester.test(
  'should serve index.html when go to "/" URL', function(done) {
    server.requestHandler({ url: "/" },
                          mockRes("<!doctype", done));
  },

  'should serve client.js when go to "/client.js" URL', function(done) {
    server.requestHandler({ url: "/client.js" },
                          mockRes(";(function(exports) {\n  exports.get", done));
  }
);
