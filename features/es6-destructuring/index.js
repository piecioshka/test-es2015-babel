// Destructuring (ES6)

let [name, surname] = ['a', 'b'];

console.assert(name === 'a');
console.assert(surname === 'b');

// ----------------------------------------------------------------------------

let {foo, bar, baz} = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
};

console.assert(foo === 'foo');
console.assert(bar === 'bar');
console.assert(baz === 'baz');
