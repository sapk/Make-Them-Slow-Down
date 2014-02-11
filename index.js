var connect = require('connect')
  , http = require('http');
  
  
var app = connect()
  .use(require('compression')())
  .use(require('')())
  .use(require('')())
  .use(function(req, res){
    res.end('Hello from Connect!\n');
  });

http.createServer(app).listen(8080);
