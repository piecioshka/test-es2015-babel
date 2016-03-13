// Property method assignment (ES6)

let foo = {
    bar() {
        return 1;
    }
};

console.assert(typeof foo.bar === 'function');
console.assert(foo.bar() === 1);
