// Arrow functions (ES6)

let foo = () => {
    return this;
};

console.assert(typeof foo === 'function');
console.assert(foo() === this);
console.assert(new foo().constructor === foo);
