// Generators (ES6)

function * foo() {
    yield 1;
    yield 2;
    yield 3;
}

console.log(foo());
console.log(foo().next().value);

console.assert(foo().next().value === 1);
var bar = foo();
console.assert(bar.next().value === 1);
console.assert(bar.next().value === 2);
console.assert(bar.next().value === 3);
