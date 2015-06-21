// Default parameters (ES6)

let foo = (step = 0) => {
    return step;
};

console.log(foo());

console.assert(foo() === 0);
console.assert(foo(0) === 0);
console.assert(foo(1) === 1);
console.assert(foo(null) === null);
