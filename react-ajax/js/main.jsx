/**
* Container component
* @author: Aakash
* @website: http://developersq.com
*/

// required modules
React = require('react'); //scope:global
ReactDOM = require('react-dom'); //scope:global
$ = require('jquery'); //scope:global
var PostsGroupHTML = require('./PostsGroupHTML.jsx'); //scope:local
var PostsGroupJSON = require('./PostsGroupJSON.jsx'); //scope:local
 
// main container component
var Container = React.createClass({
  render: function() {  
    return(
       <div> 
        <PostsGroupJSON source='ajax/ajaxjson.html' />  
        <PostsGroupHTML source='ajax/ajaxdemo.html' />
       </div>
    );
  }
});

// render - yeah
ReactDOM.render(
  <Container/>,
  document.getElementById('container')
);

