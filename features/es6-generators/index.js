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

// resetting generator again
bar = foo();

for (let item of bar) {
    console.info(item);
}

console.log('ES6 Generator ... OK');
