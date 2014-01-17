var require = require('beef');
var stub = require('./stub');
var mock = require('./mock');
var response = {};

response.send = function(path, param, callback, failback) {
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

global.Response = response;

require('./test').test();