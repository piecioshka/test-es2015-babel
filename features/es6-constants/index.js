// Constants (ES6)

try {
    eval('const foo = "bar";foo = 1;');
} catch (err) {
    console.assert(true);
}
