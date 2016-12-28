/**
* main.jsx
* file calls the App component for rendering
* @author: Aakash Dodiya
* @website: http://www.developersq.com
*/

/*React = require('react'); // scope:global
ReactDOM = require('react-dom'); // scopeglobal
$ = require('jquery'); // scope:global*/
import React from 'react';
import ReactDOM from 'react-dom';

//var App = require('./components/App.jsx'); //scope:local

ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById('container')
);