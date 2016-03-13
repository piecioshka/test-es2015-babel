// Rest parameters (ES6)

let foo = (index, ...args) => {
    return args[index];
};

console.assert(foo(0, 'a', 'b', 'c') === 'a');
console.assert(foo(1, 'a', 'b', 'c') === 'b');
console.assert(foo(2, 'a', 'b', 'c') === 'c');
console.assert(foo(3, 'a', 'b', 'c') === undefined);

console.log('ES6 Rest parameters ... OK');
