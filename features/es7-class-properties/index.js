// Class properties (ES7)

class TestClass {
    foo = [];
}

let t = new TestClass();

console.assert(t.foo == []);

console.log('ES7 Class properties ... OK');
