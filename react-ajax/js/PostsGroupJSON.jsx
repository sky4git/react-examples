/**
* PostsGroupJSON component
* @description: Our component get JSON data from ajax request and displays it as we want.
* @author: Aakash
* @website: http://developersq.com
*/
var Post = require('./Post.jsx'); //scope:local

// Posts Group
var PostsGroupJSON = React.createClass({
  // setting initial states
  getInitialState: function() {
    return {
      data: {posts: []},      
    };
  },

  componentDidMount: function() {
    //set ajax request
    $.get(this.props.source, function(result) {
      // Parse json string into JavaScript array
      var postsArr = JSON.parse(result); 
      if (this.isMounted()) {
        this.setState({
          data: postsArr
        });
      }
    }.bind(this));
  },

  render: function() {
    var result = this.state.data;  
    return (
      <div>
      {
         result.posts.map(function(post, i) {
            //console.log(post.title);
            return <Post title={post.title} url={post.url} key={i}/>
         })
      }
      </div>
    );
  }
});

module.exports = PostsGroupJSON;