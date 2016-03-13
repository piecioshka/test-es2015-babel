// Function bind (ES7)

function foo() {
    return this.title;
}

var bar = {
    title: 'baz'
};

console.assert(bar::foo() === 'baz');
