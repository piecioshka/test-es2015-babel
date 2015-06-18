// Classes (ES6)

class Application {
    constructor() {

    }

    static foo() {
        return true;
    }
}

var a = new Application();
console.log(a);

console.assert(typeof a === 'object');
console.assert(Application.foo());
