// Classes

(function (root) {
    'use strict';

    class Application {
        constructor() {
            console.log('Application#constructor', this);
        }

        static foo() {
            console.log('Application#foo', this);
        }
    }

    new Application();
    Application.foo();

}(this));
