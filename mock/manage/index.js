// 保持每个包的独立性
define(function(require, exports, module) {
    exports.get = function(path, param) {
        return {
            status: 200,
            data: []
        };
    };
});