// Type annotations (ES7)

let foo = (bar: number) => {
    return bar;
};

console.log(foo(123));
console.log(foo('aaa'));

console.assert(foo(123));
console.assert(foo('aaa'));
