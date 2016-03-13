'use strict';

require('shelljs/global');

var chalk = require('chalk');

let allFeatures = ls('features');
let singleFeatures = [
//    'es6-arrow-functions',
//    'es6-classes',
//    'es6-computed-property-names',
//    'es6-constants',
//    'es6-default-parameters',
//    'es6-destructuring',
//    'es6-for-of',
//    'es6-generators',
//    'es6-let-scoping',
//    'es6-module-export-extensions',
//    'es6-modules',
//    'es6-property-method-assignment',
//    'es6-property-name-shorthand',
//    'es6-rest-parameters',
//    'es6-spread',
//    'es6-template-literals',
//    'es6-unicode-regex',
    'es7-async-functions'
];

function test(workingFeatures) {
    workingFeatures.forEach(function (file) {
        file = 'features/' + file + '/index.js';
        var status = exec('./node_modules/babel-cli/bin/babel-node.js ' + file);

        if (status.code !== 0) {
            console.log(file + ' ... ' + chalk.red('FAILED'));
        } else {
            console.log(file + ' ... ' + chalk.green('OK'));
        }
    });
}

test(singleFeatures);
// test(allFeatures);
