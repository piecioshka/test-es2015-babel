// Classes (ES6)

class Application {
    constructor() {
        this.isCreated = true;
    }

    static foo() {
        return true;
    }

    static get bar() {
        return 'bar';
    }

    baz() {
        return this.isCreated;
    }
}

let a = new Application();

console.assert(typeof a === 'object', 'Of course, instance should be an object');
console.assert(a.isCreated, 'Create the instance of class should run `constructor` method.');
console.assert(a.baz(), 'Typical method');
console.assert(Application.foo(), 'Test static method');
console.assert(Application.bar === 'bar', 'Test static property');

// Testing hoisting in class declarations.
(function () {
    console.assert(Game === undefined);
    class Game {}
    console.assert(typeof Game === 'function');
}());
