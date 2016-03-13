// Constants (ES6)

const foo = 'bar';

try {
    foo = 1;
} catch (e) {
    console.assert(true);
}

console.error('ES6 Constants ... FAILED');
