define(function(require, exports, module) {
    var util = require('../../lib/util');

    return {
        TIMESTAMP: function(context, index) {
            var diff = parseInt(Math.random() * 36000, 10);
            return (new Date() - diff).toString(10);
        },
        KEYWORD: ["鲜花", "玫瑰", "月季", "菊花"],
        PROVINCE: ["全国", "福建", "安徽", "江苏", "江西", "山东", "浙江"],
        CITY: ["上海", "北京", "深圳", "广州"],
        PLANNAME: function(context, index) {
            var path = context.path;
            var param = context.param;
            return ["上海", "北京", "深圳", "广州", param.unitid].join('-');
        },
        UNITNAME: ["最好"]
    };
});