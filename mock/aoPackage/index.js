// 保持每个包的独立性
define(function(require, exports, module) {
    var templates = require('./templates');
    exports.get = function(path, param) {
        if (path in templates) {
            return templates[path];
        }
    };
});