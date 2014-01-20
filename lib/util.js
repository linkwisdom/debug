define(function(require, exports, module) {

    exports.merge = function(obj, data) {
        for (var item in data) {
            if (!(item in obj)) {
                obj[item] = data[item];
            }
        }
        return obj;
    };
    
});