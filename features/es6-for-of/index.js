// For-of (ES6)

var object = {
    [Symbol.iterator]: function () {
        var value = 0;

        return {
            next: function () {
                return {
                    done: Boolean(value),
                    value: value++
                }
            }
        }
    }
};

for (var i of object) {
    console.log(i);
}
