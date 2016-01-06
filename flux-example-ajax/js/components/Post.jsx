/**
* Post component
* @author: Aakash
* @website: http://developersq.com
*/

// Post
var Post = React.createClass({

  render: function() {
    return (        
		 <h4> <a href={this.props.url}>{this.props.title} </a> </h4>
    );
  }
  
});

module.exports = Post;