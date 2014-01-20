define(function(require) {
    var rst = {
        status: 200,
        data: {
            aostatus: 0,  
            absresitems:[
                
            ]
        },
        errorCode: {}
    };

    var p = [2001, 2002, 2004, 2005, 2006, 2007, 2008, 2009];

    var items = param.absreqitems || [];

    function randInt(min, max) {
        var num = min + parseInt(Math.random() * (max - min), 10);
        return num;
    }

    for (var i = 0; i < items.length; i++) {
        var status = (param.command == 'start') ? 1 : randInt(0, 3);
        var item =  {
            opttypeid: items[i].opttypeid,
            hasproblem: 1,
            status: status,
            optmd5: 1,
            opttime: (+new Date()).toString(10),
            data: {
                isnew: false,
                count: randInt(0, 8),
                clkratio: randInt(10, 80),
                timestamp: (+new Date()).toString(10)
            }
        };

        rst.data.absresitems.push(item);
    }

    return rst;
});
