define(function(require, exports) {
    var mock = require('../../lib/mockjson');
    exports.data = require('./data');

    exports.GET_material = function(context, fields) {
        return mock.generate(['@KEYWORDS']);
    };
});