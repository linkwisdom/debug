define(function(require, exports) {
   return {
      "status": 200,
      "data": {
         "aostatus": "@NUMBER|0-3",
         "desc": {
            "defaultdate": "@DATE|2014-01-01"
         },
         "listData|1-5":{
               "clks": "@NUMBER|12-1500",
               "date": "@DATE|2014-01-01"
         }
      },
      "errorCode": null
   };
});