define(function(require, exports) {
    var stub = require('../../stub/index');

    exports.GET_nikon_detail = function(path, param) {
        var result =  {
            "status": 200,
            "data": {
                "aostatus": stub.get('@NUMBER|0-3'),
                "optmd5": stub.get('@STAMPTIME'),
                "totalnum": stub.get('@NUMBER|0-10'),
                "detailresitems": stub.get('@MATERIA', param, 3),
                "commData": {
                    "begindate": stub.get('@STAMPTIME'),
                    "enddate": stub.get('@STAMPTIME')
                },
                "listData": stub.get('@MATERIA', param, 3)
            },
            "error": {}
        };
        return result;
    };

});