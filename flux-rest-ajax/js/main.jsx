/**
* main.jsx
* This file calls the App component for rendering.
* @author: Aakash Dodiya
* @website: http://www.developersq.com
*/

React = require('react'); // scope:global
ReactDOM = require('react-dom'); // scope:global
$ = require('jquery'); // scope:global

var App = require('./components/App.jsx'); //scope:local

// render our application here
ReactDOM.render(
  <App />,
  document.getElementById('container')
);