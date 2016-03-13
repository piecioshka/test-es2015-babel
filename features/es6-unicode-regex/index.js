// TODO: Unicode regex (ES6)

let foo = () => {
    return "𠮷".match(/./u)[0].length == 2;
};

console.assert(foo() === "\u{20BB7}");
console.assert(foo() === "\uD842\uDFB7");

console.error('ES6 Unicode regex ... FAILED');
