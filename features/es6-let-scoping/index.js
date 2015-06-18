// Let scoping (ES6)

function foo() {
    var bar = 'baz';

    {
        let bar = 'bax';
        console.log(bar);
        console.assert(bar === 'bax');
    }

    console.log(bar);
    console.assert(bar === 'baz');
}

foo();
