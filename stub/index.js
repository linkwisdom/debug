define(function(require, exports, module) {
    var mc = require('../lib/mockjson');
    var util = require('../lib/util');


    var tplData = require('./common/data');
    var aoPackage = require('./aoPackage');
    var common = require('./common');

    mc.data = util.merge(mc.data, common.data);
    mc.include(common);

    mc.include(aoPackage);

    function getMockies(path, param, num) {

        // 如果path是@开头；则表示变量获取
        if (path.charAt(0) == '@') {
            mc.context = {
                path: path,
                param: param
            };
            var rst =  [];
            var length = num || 1;
            for (var i = 0; i < length ; i++) {
                rst.push(mc.generate(path, mc.data))
            }
            return num ? rst: rst[0];
        } else {
            mc.get(path, param);
        }
    }

    exports.get = function(path, param, num) {
        switch( typeof path) {
            case 'string' : return getMockies(path, param, num);
            case 'object' : return mc.get(path, param);
            default: return {}
        }
    };
});