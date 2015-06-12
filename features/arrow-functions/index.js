// Arrow functions
// @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

(function (root) {
    'use strict';

    function Application() {
        console.log('Application#constructor: ', this);

        this.foo = () => {
            console.log('Application#foo: ', this);
        };

        this.bar = function () {
            console.log('Application#bar: ', this);
        };

        setTimeout(this.foo, 0);
        setTimeout(this.bar, 0);
    }

    new Application();

}(this));
