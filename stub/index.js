define(function(require, exports, module) {
    var mc = require('../lib/mockjson');

    var tplData = require('./common/data');
    var aoPackage = require('./aoPackage');

    mc.include(aoPackage);

    exports.get = function(path, param) {
        var data = mc.get(path, param);
        data = data || mc.generate({
            status: 200,
            'data|0-9': "@NUMBER"
        });
        return JSON.stringify(data, '\t', 3);
    };
});