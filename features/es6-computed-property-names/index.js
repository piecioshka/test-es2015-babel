// Computed property name (ES6)

let foo = {
    ['bar' + 4]: 'baz',
    // put to global registry symbol called `cake`
    [Symbol.for('cake')]: 'foo'
};

console.assert(foo.bar4 === 'baz');
console.assert(foo[Symbol.for('cake')] === 'foo');
