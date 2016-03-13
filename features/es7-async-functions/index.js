// Async functions (ES7)

// Only when you install: babel-plugin-syntax-async-functions

async function baz() {
    return 3;
}

console.assert(baz() instanceof Promise);
