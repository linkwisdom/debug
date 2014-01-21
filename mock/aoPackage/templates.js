define(function(require, exports) {
    var stub = require('../../stub/index');

    exports.GET_nikon_abstract = function(path, param) {
        var data = stub.get(path, param);
        return {
            'data': data
        };
    };

    exports.GET_nikon_detail = function(path, param) {
        var result =  {
            "status": 200,
            "data": {
                "aostatus": stub.get('@NUMBER|0-3'),
                "optmd5": stub.get('@TIMESTAMP', param),
                "totalnum": stub.get('@NUMBER|5-10', param),
                "detailresitems": stub.get('@MATERIA', param, 3),
                "commData": {
                    "begindate": stub.get('@TIMESTAMP', param),
                    "enddate": stub.get('@TIMESTAMP', param)
                },
                "listData": stub.get('@MATERIA', param, 3)
            },
            "error": {}
        };
        return result;
    };

});