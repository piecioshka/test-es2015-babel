// Generators (ES6)

function * foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let bar = foo();

console.assert(foo().next().value === 1);
console.assert(bar.next().value === 1);
console.assert(bar.next().value === 2);
console.assert(bar.next().value === 3);
