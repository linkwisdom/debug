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
               "listData": [
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
                                   "endpoint": ["@NUMBER|122-133", "@NUMBER|122-155"],
                                   "budgetpoint": ["@NUMBER","@NUMBER"],
                                   "keypoints|4-4": [],
                                   "incitermsg|4-4": [
                                        [
                                             "@TIMESPAN",
                                             "@NUMBER",
                                             "@NUMBER"
                                        ]
                                   ],
                                   "show_encourage": 1,
                                   "model_num": "@NUMBER|1-10",
                                   "words": "@KEYWORD",
                                   "wordids|1-5": "@NUMBER|1-15"
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