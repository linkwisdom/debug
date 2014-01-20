define( function(require, exports, module) {
     //var mock = require('mockjson');

     function keypoints() {
          return [12, 12];
     }

     return {
          "status": 200,
          "data": {
               "totalnum": 1,
               "returnnum": 100,
               "timestamp": "@TIMESPAN",
               "listData|1-1": [
                    {
                         "bgttype|0-3": 1,
                         "daybgtdata": {
                              "daybgtvalue": "@NUMBER",
                              "dayanalyze": {
                                   "tip": "@NUMBER",
                                   "suggestbudget": "@NUMBER",
                                   "lostclicks": "@NUMBER",
                                   "retripercent": "@NUMBER",
                                   "startpoint|1-1": [
                                        0,
                                        0
                                   ],
                                   "endpoint|1-2": ["@NUMBER"],
                                   "budgetpoint|1-1": ["@NUMBER","@NUMBER"],
                                   "keypoints|4-4": keypoints(),
                                   "incitermsg|4-4": [
                                        [
                                             "@TIMESPAN",
                                             "@NUMBER",
                                             "@NUMBER"
                                        ]
                                   ],
                                   "show_encourage": 1,
                                   "model_num": 5,
                                   "words|1-3": "@KEYWORD",
                                   "wordids|1-5": ["@NUMBER"]
                              }
                         },
                         "weekbgtdata": null
                    }
               ]
          },
          "error": {},
          "errorCode": 0
     };
});