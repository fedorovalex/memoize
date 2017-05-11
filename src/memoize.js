export { memoize };

function memoize(func) {
    var cash = {};
    return function (...arg) {
        var key = identifyKey(arg), result;
        if (key in cash) {
            result = cash[key];
        } else {
            result = cash[key] = func(...arg);
        }
        return result;
    }
}

var identifyKey = function (arg) {
    var key = "";
    arg.forEach(function (elem) {
                            key += "[" + Object.prototype.toString.call(elem).slice(8, -1) + " - " + elem + "], ";
                        });
    return key;
};
