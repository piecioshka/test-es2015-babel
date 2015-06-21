// Arrow functions (ES6)

// we could not change to `arrow function`, because it does not have [[Constructor]]
let Foo = function () {
    let api = {
        bar: () => {
            return this;
        },

        baz() {
            return this;
        }
    };

    api._api = api;

    return api;
};


let f = new Foo();
console.log(f.bar, f.bar());
console.log(f.baz, f.baz());

console.assert(typeof f.bar === 'function', 'Of course should be a function');
console.assert(typeof f.baz === 'function', 'Of course should be a function');
console.assert(f.baz() === f.baz()._api, 'The same API object');
console.assert(f.baz() === f, 'Return itself');
