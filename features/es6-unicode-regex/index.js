// TODO: Unicode regex (ES6)

var foo = function () {
    return "𠮷".match(/./u)[0].length == 2;
};

console.log(foo());

console.assert(foo() === "\u{20BB7}");
console.assert(foo() === "\uD842\uDFB7");
