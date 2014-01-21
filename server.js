var http = require('http');
var require = require('beef');
var stub = require('./stub');
var mock = require('./mock');
var response = {};

// require.config({
//     path: {
//         lib: './lib'
//     }
// });

function send(path, param, callback, failback) {
    var json = {};
    path && (path = path.replace(/\//g, '_'));

    if (json = mock.get(path, param)) {
        callback && callback(json);

    } else if (json = stub.get(path, param)) {
        callback && callback(json);

    } else {

        json = stub.get('GET_fail', param);
        failback && failback(json);
    }
};

http.createServer(function(request, response) {
    var url = require('url').parse(request.url, true);
    var path = url.query.path;
    var param = url.query.param;

    response.writeHead(200, 
        {'Content-Type': 'text/plain;charset=utf-8'}
    );

    if (request.headers.method == 'POST') {
        var data = [];

        request.on('data', function(trunk) {
            data.push(trunk);
        });
        request.on('end', function(trunk) {
            data.push(trunk);
            data = data.toString();
            var query = require('qs').parse(data);
            console.log(query);
        });
    } else {

        param = JSON.parse(param || "{}");

        send(path, param, function(result) {
            result = JSON.stringify(result, '\t', 3);
            response.end(result);
        });
    }
}).listen(8181);



// global.Response = response;

// require('./test').test();