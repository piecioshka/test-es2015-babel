// React

// Only when you install: react and babel-preset-react

var React = require('react');

class Component extends React.Component {
    render() {
        return <span>foo</span>;
    }
}

let label = new Component();

console.assert(label instanceof React.Component);
