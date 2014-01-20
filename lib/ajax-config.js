define(function(require, exports) {
    var ajaxList = [
        'GET_nikon_abstract'
    ];

    // 判断当前请求是否需要发送ajax真实请求
    exports.needAjax = function(path, param) {
        if (ajaxList.indexOf(path)) {
            return true;
        }
    };

    exports.ajaxList = ajaxList;
});