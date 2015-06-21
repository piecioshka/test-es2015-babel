// For-of (ES6)

let object = {
    list: ['foo', 'bar', 'baz'],
    // create my own iterator through `this.list`
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                return {
                    done: index >= this.list.length,
                    value: this.list[index++]
                }
            }
        }
    }
};

for (let i of object) {
    console.log(i);
}

// ----------------------------------------------------------------------------

let alphabet = ['a', 'b', 'c'];

// use default iterator: for array is @values()
for (let letter of alphabet) {
    console.log(letter);
}
