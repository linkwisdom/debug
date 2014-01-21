define(function(require) {
    return {
        "status": 200,
        "data": {
            "aostatus": '@NUMBER|0-3',
            "optmd5": '@TIMESTAMP',
            "totalnum": '@NUMBER|5-10',
            "detailresitems": '@MATERIA',
            "commData": {
                "begindate": '@TIMESTAMP',
                "enddate": '@TIMESTAMP'
            },
            "listData": '@MATERIA'
        },
        "error": {}
    };
});