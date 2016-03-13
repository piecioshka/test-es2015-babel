// Class properties (ES7)

class TestClass {
    foo = [];
}

let t = new TestClass();

console.assert(Object.prototype.toString.call(t.foo) === '[object Array]');
