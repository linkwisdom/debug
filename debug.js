define(function(require) {
    var stub = require('./stub');
    var mock = require('./mock');
    var config = require('./lib/ajax-config');

    var response = {};

    response.send = function(path, param, callback, failback) {
        var json = {};

        // 判断是否发送ajax真实请求
        if (config.needAjax(path)) {
            _Response.send.apply(_Response, arguments);
            return;
        }

        // 客户端mock
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
    window._Response = Response;
    window.Response = response;
    return response;
});