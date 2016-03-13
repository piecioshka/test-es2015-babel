// Spread (ES6)

let foo = (index) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args[index];
};

console.assert(foo(...[0, 'a', 'b', 'c']) === 'a');
console.assert(foo(...[1, 'a', 'b', 'c']) === 'b');
console.assert(foo(...[2, 'a', 'b', 'c']) === 'c');
console.assert(foo(...[3, 'a', 'b', 'c']) === undefined);

console.error('ES6 Spread ... OK');