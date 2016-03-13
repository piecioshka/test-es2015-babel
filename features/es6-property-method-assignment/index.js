// Property method assignment (ES6)

let foo = {
    bar() {
        return 1;
    }
};

console.assert(typeof foo.bar === 'function', 'Should be method od this literal object');
console.assert(foo.bar() === 1, 'Should works as regular function');

console.log('ES6 Property method assignment ... OK');
