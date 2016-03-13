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

let props = [];

for (let i of object) {
    props.push(i);
}

console.assert(props.toString() === 'foo,bar,baz');

// ----------------------------------------------------------------------------

let alphabet = ['a', 'b', 'c'];
let alphabetProps = [];

// use default iterator: for array is @values()
for (let letter of alphabet) {
    alphabetProps.push(letter);
}

console.assert(alphabetProps.toString() === 'a,b,c');
