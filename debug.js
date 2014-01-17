define(function(require) {
    var stub = require('./stub');
    var mock = require('./mock');
    var response = {};

    response.send = function(path, param, callback, failback) {
        var json = {};

        if (json = mock.get(path, param)) {
            callback && callback(json);

        } else if (json = stub.get(path, param)) {
            callback && callback(json);

        } else {

            json = stub.get('GET/fail', param);
            failback && failback(json);
        }
    };

    // 准备全局劫持
    window.Response = response;
    return response;
});