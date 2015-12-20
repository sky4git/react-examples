React = require('react'); // global
ReactDOM = require('react-dom'); // global
$ = require('jquery'); // global

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var App = require('./components/App.jsx');

ReactDOM.render(
  <App />,
  document.getElementById('container')
);