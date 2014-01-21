define(function(require) {
    return {
        status: 200,
        data: {
            aostatus: 0,  
            "absresitems|1-10": {
                opttypeid: "@NUMBER|2001-2009",
                hasproblem: "@NUMBER|0-3",
                status: "@NUMBER|2001-2003",
                optmd5: "@NUMBER|1001-99999",
                opttime: "@TIMESTAMP",
                data: {
                    "isnew|0-1": false,
                    count: "@NUMBER|0-50",
                    clkratio: "@NUMBER|10-80",
                    timestamp: "@TIMESTAMP",
                }
            }
        },
        errorCode: {}
    };
});
