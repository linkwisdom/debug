/**
 * @file generate mock-data
 * 
 */

define(function(require, exports, module) {
    var mockMap = {};
    var _numbers = '0123456789'.split('');
    var LETTER_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // context
    exports.context = null;

    // source meta data
    exports.data = {
        NUMBER: function(context, args) {
            min = +args[0];
            max = +args[1];
            return randInt(min, max);
        },
        STRING: function(context, args) {
            var len = randInt(+args[0], +args[1]);
            var chars = [];
            for (var i = 0; i < len ; i++) {
                var idx = randInt(0, 24);
                chars.push(LETTER_UPPER[idx]);
            }
            return chars.join('');
        },
        LETTER_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
        LETTER_LOWER: 'abcdefghijklmnopqrstuvwxyz'.split('')
    };

    function randInt(min, max) {
        return Math.round(rand() * (max - min)) + min;
    }

    function getRandomData(key, args, pkgData) {

        if (key.charAt(0) == '@') {
            key = key.substr(1);
        }
        
        var tpl = key;

        if (pkgData && (key in pkgData)) {
            tpl = pkgData[key];
        } else if (key in exports.data) {
            tpl = exports.data[key];
        } else {
            return key;
        }

        // 如果是数组，从数组中随机返回值!!
        switch (type(tpl)) {
            case 'array':
                var index = Math.floor(tpl.length * rand());
                return tpl[index];

            case 'function':
                if ('string' == typeof args) {
                    var args = args.split('-');
                    return tpl(exports.context, args, pkgData);
                } else {
                    return tpl(exports.context || {}, args, pkgData);
                }
                
        }
    }

    function rand() {
        return Math.random();
    }

    function isArray(object) {
        return object && typeof object == 'object' 
            && 'splice' in object 
            && 'join' in object;
    }


    function type(obj) {
        return isArray(obj)
            ? 'array'
            : (obj === null) ? 'null' : typeof obj;
    }

    function stripString(str, pkgData) {
        var pcs = str.match(/@([A-Z_0-9]+)\|?([\w\-]+)*/g) || [];
        var rst = [];
        for (var i = 0, l = pcs.length; i < l; i++) {
            var pc = pcs[i];
            var regs = ((/@([A-Z_0-9]+)\|?([\w\-]+)*/g)).exec(pc);
            if (regs && regs.length > 0) {
                var key = regs[1];
                var args = regs[2];

                var data = getRandomData(key, args || i, pkgData);
                rst.push(data);
            } else {
                rst.push(pc);
            }
        };

        if (pcs.length == 1) {
            rst = rst[0];
        }

        return rst;
    }

    /**
     * generate
     * @param  {Object/JSON} template template content
     * @param  {Object/JSON} pkgData  variables for template
     * @param {string} name like 'key|0-5'
     * @return {Object/JSON}          target content
     */
    exports.generate = function(template, pkgData, name) {
        var me = this;
        var length = 1;
        var dataType = 'string';

        var matches = (name || '').match(/(\w+)(\|[\d\-]+)?(\|(\w)+)?/);

        if (matches) {
            if (matches[3]) {
                dataType = matches[3].substr(1);
            }

            if (matches[2]) {
                var range = matches[2].substr(1).split('-');

                var min = parseInt(range[0], 10);
                range[1] || (range[1] = min);
                var max = parseInt(range[1], 10);
                length = Math.round(rand() * (max - min)) + min;
                if (length > 1 ) {
                    var rst = [];
                    for (var i = 0; i < length; i++) {
                        rst.push(me.generate(template, pkgData));
                    }
                    return rst;
                }
            }
        }

        var generated = null;
        switch (type(template)) {
            case 'array':
                generated = [];
                length = template.length;
                for (var i = 0; i < length; i++) {
                    generated[i] = me.generate(template[i], pkgData);
                }
                break;

            case 'object':
                generated = {};
                for (var p in template) {
                    var kstr = p.replace(/\|(\d+-\d+|\+\d+)/, '');
                    generated[kstr] = me.generate(template[p], pkgData, p);
                    var matches = p.match(/\w+\|\+(\d+)/);
                    if (matches && type(template[p]) == 'number') {
                        var increment = parseInt(matches[1], 10);
                        template[p] += increment;
                        generated[kstr] = template[p];
                    }
                }
                break;

            case 'number':
                generated = (matches) ? length : template;
                break;

            case 'boolean':
                generated = (matches) ? rand() >= 0.5 : template;
                break;

            case 'string':
                if (template.length) {
                    generated = [];
                    length = length || 1;

                    for (var i = 0; i < length; i++) {
                        generated.push(template);
                    }

                    var rst = [];
                    for (var i = 0; i < generated.length; i++) {
                        var tpl = generated[i];
                        var data = stripString(tpl, pkgData);
                        
                        var tp = type(data);

                        if (tp == 'number') {
                            rst[i] = Number(data);

                        } else if (data && data.join ) {
                            data = data.join('');
                        }

                        rst[i] = data;
                    }

                    if (rst.length > 0) {
                        generated = rst;
                        if (length == 1) {
                            generated = rst[0];
                        }
                    }

                } else {
                    generated = '';
                    for (var i = 0; i < length; i++) {
                        var ch = Math.floor(rand() * 255);
                        generated += String.fromCharCode(ch);
                    }
                }
                break;

            default:
                generated = template;
                break;
        }
        return generated;
    };

    /**
     * hijact request
     * @param  {string|regexp} request
     * @param  {Object/JSON} template
     */
    exports.set = function(request, template, pkgData) {
        var keyStr = request.toString();

        mockMap[keyStr] = {
            request: request,
            template: template,
            pkgData: pkgData
        };
    };

    /**
     * get mock data
     * @param  {string} path  path/url or anything
     * @param  {Object} param args/context or anything
     * @return {Object/string/array} 
     */
    exports.get = function(path, param) {
        var me = this;

        exports.context = {
            path: path,
            param: param || {}
        };

        for (var item in mockMap) {
            var mock = mockMap[item];
            var req = mock.request;

            if (('string' == typeof req && req == path)
                    || (req.test && req.test(path))) {
                return me.generate(mock.template, mock.pkgData);
            }
        }
    };

    // auto batch include templates and pakage data
    exports.include = function(pkg) {
        var me = this;
        if ('object' != typeof pkg) {
            return;
        }

        for (var item in pkg) {
            if (item == 'name' || item == 'data') {
                continue;
            }

            me.set(item, pkg[item], pkg.data);
        }
    };
});