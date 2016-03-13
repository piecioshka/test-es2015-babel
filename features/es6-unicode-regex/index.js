// Unicode regex (ES6)

console.assert("𠮷".match(/^.$/u)[0].length === 2);
console.assert("𝌆".match(/\u{1d306}/u)[0].length === 2);
