var require = require('beef');
var mock = require('../lib/mockjson');
var common = require('../stub/common');
var stub = require('../stub');

mock.include(common);

// mock.context = {param: {fields: ['unitname', 'planname', 'planid', 'wordid']}};
// var rst = mock.generate({
//     "status": 200,
//     "user|1-30": {"id|+1": 100},
//     "items|5": "@MATERIA"
// }, common.data);

var rst = stub.get('@MATERIA', {fields: ['unitname', 'planname', 'planid', 'wordid']});

console.log(JSON.stringify(rst, '\t', 3));