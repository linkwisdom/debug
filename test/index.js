define(function(require, exports) {
    var ao = require('./ao-test');

    exports.test = function(path) {
        var param = {
            'unitid': '123,1233',
            'planid': '1222'
        };
        
        // ao.test('GET/nikon/abstract', param);
        // ao.test('GET/nikon/detail', param);
        // ao.test('GET_ao_planbudgetdetail', param);
        ao.test('GET_easymanage_ignore', param);
    };
})