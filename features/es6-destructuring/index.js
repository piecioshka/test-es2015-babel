// Destructuring (ES6)

let [name, surname] = ['a', 'b'];

console.log(name, surname);

console.assert(name === 'a');
console.assert(surname === 'b');

// ----------------------------------------------------------------------------

let {foo, bar, baz} = {
    foo: 'foo',
    bar: 'bar',
    baz: 'baz'
};

console.log(foo, bar, baz);

console.assert(foo === 'foo');
console.assert(bar === 'bar');
console.assert(baz === 'baz');
