define(function(require, exports, module) {
    var mockjson = require('../../lib/mockjson');

    var fields_map = {
        'wordid': '@NUMBER|200-230',
        'planname': '@PLANNAME',
        'unitid': '@NUMBER|200-230',
        'unitname': '@UNITNAME'
    };

    return {
        TIMESTAMP: function(context, index) {
            var diff = parseInt(Math.random() * 36000, 10);
            return (new Date() - diff).toString(10);
        },
        KEYWORD: ["鲜花", "玫瑰", "月季", "菊花"],
        PROVINCE: ["全国", "福建", "安徽", "江苏", "江西", "山东", "浙江"],
        CITY: ["上海", "北京", "深圳", "广州"],
        PLANNAME: ["推广", "计划", "年中", "年末"],
        UNITNAME: ["最好"],
        MATERIA: function(context, args, pkgData) {
            var fields = context.param.fields;
            var tpl = {};

            for (var i = 0; i < fields.length; i++) {
                var item = fields[i];
                if (item in fields_map) {
                    tpl[item] = fields_map[item];
                }
            }
            return mockjson.generate(tpl, pkgData);
        }
    };
});