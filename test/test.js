require('shelljs/global');

ls('features').forEach(function (file) {
    file = 'features/' + file + '/index.js';
    exec('./node_modules/babel-cli/bin/babel-node.js ' + file);
});
