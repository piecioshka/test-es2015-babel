// Let scoping (ES6)

(function () {
    var bar = 'baz';

    var overwrite = () => {
        console.assert(typeof bar === 'undefined');
        let bar = 'bax';
        console.assert(bar === 'bax');
    };

    overwrite();

    console.assert(bar === 'baz');
})();
