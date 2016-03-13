// Object rest spread (ES7)

var {foo, ...rest} = { foo: 1, bar: 2, baz: 3 };

console.assert(foo === 1);
console.assert(rest.bar === 2);
console.assert(rest.baz === 3);

var someSettings = { foo: 1, bar: 2 };
var globalSettings = { baz: 3, ...someSettings };

console.assert(globalSettings.foo === 1);
console.assert(globalSettings.bar === 2);
console.assert(globalSettings.baz === 3);
