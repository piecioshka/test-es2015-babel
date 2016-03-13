// Let scoping (ES6)

let foo = () => {
    var bar = 'baz';

    var overwrite = () => {
        console.assert(typeof bar === 'undefined', 'In this scope bar is not exists');
        let bar = 'bax';
        console.assert(bar === 'bax');
    };

    overwrite();

    console.assert(bar === 'baz');
};

foo();

console.error('ES6 Let scoping ... FAILED');
