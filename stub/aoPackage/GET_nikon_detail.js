define(function(require) {
    function randInt(min, max) {
        var num = min + parseInt(Math.random() * (max - min), 10);
        return num;
    }

    var rst =  {
        "status": 200,
        "data": {
            "aostatus": 0,
            "optmd5": 1234567,
            "totalnum": 75,
            "detailresitems": [
                
            ],
            "commData": {
                "begindate": "1336140186475",
                "enddate": "1336640186475"
            },
            "listData": []
        },
        "error": {}
    };

    function randInt(min, max) {
        var num = min + parseInt(Math.random() * (max - min), 10);
        return num;
    }

    var dict = [
        '男装',
        '皮革',
        '最好',
        '购买',
        '家具',
        '第一',
        '实惠',
        '北京'
    ];

    function randStr(len) {
        var text = [];
        var n = dict.length;

        for (var i = 0; i < len; i++) {
            var idx = randInt(0, n);
            text.push(dict[idx]);
        }
        return text.join('');
    }

    var condition = param.condition;

    var data = [];
    for (var i = 0; i < 10; i++) {
        var idx = condition.startindex + i;
        var item = {
            "data": {
                "unitname": idx + randStr(30),
                "planname": param.opttypeid + randStr(30),
                "planid": randInt(1, 99),
                "bid": randInt(0, 200),
                "unitid": randInt(1, 99),
                "unitbid": randInt(1, 99),
                "winfoid": randInt(1, 999),
                "showword": idx + randStr(20),
                "ideacount": randInt(0, 2),
                "pageexp": randInt(0, 5),
                "blockreason": randInt(0, 4),
                "showqscore": randInt(0, 9),
                "wbudget": randInt(45, 99),
                "bouncerate": randInt(1, 100),
                "paysum": randInt(1, 1000),
                "tip": "3",
                // "ideaid": "1,2,3",
                "clklost": randInt(0, 50),
                "bgttype": "1",
                "saveclk": randInt(0, 1000),
                "peershowword": "null", // 同行标杆词
                "peerwordid": "123", // 同行标杆词id
                "modelcount": "128", //同行个数
                "startinciterpoint": "02:05:00,21,198", // 起点
                "selfpoint": "06:05:00,111,298", // 自身点
                "peerpoint": "19:05:00,191,398",
                "endinciterpoint": "23:59:00,581,898",
                "suggestbudget": randInt(50, 150), // 建议预算值

                "mtid": 1,
                "ideaid": "13",
                "beginvalue": randInt(1, 10),
                "endvalue": randInt(15, 50),
                "content": [
                       {
                          "title": "一朵鲜花",
                          "index": 1,
                          "url": "http://www.baidu.com"
                       },
                       {
                          "title": "二朵鲜花" + randInt(15, 50),
                          "index": 2,
                          "url": "http://www.baidu.com"
                       },
                       {
                          "title": "三朵鲜花" + randInt(15, 50),
                          "index": 3,
                          "url": "http://www.baidu.com"
                       },
                       {
                          "title": "四朵鲜花" + randInt(15, 50),
                          "url": "http://www.baidu.com"
                       },
                       {
                          "title": "五朵大鲜",
                          "index": 4,
                          "url": "http://www.baidu.com"
                       }
                    ]
            }
        };
        data.push(item);
    }

    if (param.opttypeid == '2002') {
        data.push({
            data: {
                "planname": "自动1",
                "saveclk": "332",
                "clks": "0",
                "modelcount": "20",
                "tip": "3",
                "planid": "3007492299",
                "wbudget": "99.0",
                "clklost": "12",
                "bgttype": "1",
                "suggestbudget": "99.99",
                "pv": "0",
                "peerwordid": "433401672",
                "paysum": "0"
            }
        });
    }


    rst.data.detailresitems = data;

    rst.data.totalnum = randInt(25, 45);

    return rst;

});