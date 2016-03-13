// Type annotations (ES7)

// Only when you install: https://babeljs.io/docs/plugins/transform-flow-strip-types/

let foo = (bar: number) => {
    return bar;
};

console.assert(foo(123) === 123);
console.assert(foo('aaa') === 'aaa');

// Only works by syntax analyzer, ex. in WebStorm.
