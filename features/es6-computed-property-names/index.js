// Computed property name (ES6)

var foo = {
    ['bar' + 4]: 'baz'
};

console.log(foo);
console.assert(foo.bar4 === 'baz');
