// Type annotations (ES7)

let foo = (bar: number) => {
    return bar;
};

console.assert(foo(123));
console.assert(foo('aaa'));

console.error('ES7 Type annotations ... FAILED');
