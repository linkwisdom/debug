define(function(require, exports) {
    function callback(result) {
        console.log(result);
    }

    function failback(result) {
        console.log(result);
    }

    exports.test = function(path, param) {
        path || (path = 'GET/nikon/abstract');
        param || (path = {});
        
        Response.send(path, param, callback, failback);
    };
})