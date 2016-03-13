// Default parameters (ES6)

let foo = (step = 0) => {
    return step;
};

console.assert(foo() === 0);
console.assert(foo(0) === 0);
console.assert(foo(1) === 1);
console.assert(foo(null) === null);

console.log('ES6 Default parameters ... OK');
