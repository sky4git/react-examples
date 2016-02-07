/**
* Post component
* @author: Aakash
* @website: http://developersq.com
*/

// Post
var Post = React.createClass({
    
  handleClick: function(event){
    event.preventDefault();
    var input = event.target;
   // console.log(event.target.dataset.postid);
    var postid = event.target.dataset.postid;
    // sending action to load post preview
    AppActions.loadPostPreview(postid);
  },  
    
  render: function() {
   
    return (        
       <div>
            <a href={this.props.url}  data-postid={this.props.postid} onClick={this.handleClick}>{this.props.title}</a>
       </div>  
    );
  }
  
});

module.exports = Post;