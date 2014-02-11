var connect = require('connect')
        , http = require('http');


var app = connect()
        // .use(require('compression')())
        //.use(connect.static(__dirname + '/www', {maxAge: 0}))
        .use(connect.static(__dirname + '/www'))
        .use(function(req, res) {
            //res.end('Hello from Connect!\n');
            res.end('No File Found !\n');
        });

http.createServer(app).listen(8080);
