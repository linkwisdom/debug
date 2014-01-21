define(function(require, exports, module) {
    exports.name = 'aopackage';

    // 扩展数据只对当前包有效
    exports.data = require('./data');

    exports.GET_ao_planbudgetdetail = require('./GET_ao_planbudgetdetail');
    exports.GET_easymanage_ignore = require('./GET_easymanage_ignore');
    exports.GET_nikon_abstract = require('./GET_nikon_abstract');

    exports.GET_nikon_detail = {
        "status": 200,
        "data": {
            "aostatus|0-3": 0,
            "totalnum|0-10": 3,
            "optmd5": "@TIMESTAMP",
            "commData": {
                "datatime|20140101-20140108": 20140100,
                "version": "1.0"
            },
            "detailresitems|0-15": [{
                "data": {
                    "planid|+1": 415701,
                    "winfoid|+1": 700079,
                    "unitbid|0.1-100.0": 1,
                    "unitid|+5": 6457,
                    "unitname|1-5": "@PROVINCE@CITY@UNITNAME",
                    "creative": {
                        "title": "@PLANNAME @KEYWORD",
                        "idea|3-10": "@CITY@PLANNAME@KEYWORD@PROVINCE"
                    },
                    "planname": "@PLANNAME",
                    "showword|1-2": "@KEYWORD",
                    "pv|0-10000": 0,
                    "paysum|0-1000": 0,
                    "clks|0-10000": 0,
                    "bid|0-1000": 0
                }
            }]
        },
        "errorCode": null
    };
});