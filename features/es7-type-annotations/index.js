// Type annotations (ES7)

var foo = function (bar: number) {
    return bar;
};

console.log(foo(123));
console.log(foo('aaa'));

console.assert(foo(123));
console.assert(foo('aaa'));
