// Async generator functions (ES7)

// Only when you install: babel-plugin-transform-async-to-generator

let bar = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 2000);
    });
};

async function foo() {
    return await bar();
}

console.assert(foo() instanceof Promise);

foo().then((value) => {
    console.assert(value === 5);
});
