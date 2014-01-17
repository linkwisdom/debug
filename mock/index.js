define(function(require, exports) {
    var packages = {
        aoPackage: require('./aoPackage/index')
    };
    
    exports.get = function(path, param) {
        for (var name in packages) {
            var pkg = packages[name];
            var proc = null;

            if (proc = pkg.get(path, param)) {
                if ('function' == typeof proc) {
                    return proc(path, param)
                } else {
                    return proc;
                }
            }
        };
    };
})