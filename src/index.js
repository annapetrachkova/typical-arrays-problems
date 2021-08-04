
exports.min = function min (array) {
    if (array && array.length > 0) {
        return array.reduce(function (p, v) {
            return (p < v ? p : v);
        });
    } else
        return 0;
}

exports.max = function max (array = 0) {
    if (array && array.length > 0) {
        return array.reduce(function (p, v) {
            return (p > v ? p : v);
        });
    } else
        return 0;
}

exports.avg = function avg (array) {
    if (array && array.length > 0) {
        return array.reduce((sum, item) => (sum += item)) / array.length;
    } else
        return 0;
}
