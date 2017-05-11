export { memoize };

function memoize(func) {
    const cash = {};
    return function (...arg) {
        const key = identifyKey(arg);
        let result;
        if (key in cash) {
            result = cash[key];
        } else {
            result = cash[key] = func(...arg);
        }
        return result;
    }
}

const identifyKey = (args) => args.reduce((key, arg) => `${key}[${typeof arg} - ${arg}], `, "!");
