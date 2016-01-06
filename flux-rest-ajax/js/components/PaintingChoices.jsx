/**
* PaintingChoices component
* @author: Aakash
* @website: http://developersq.com
*/

var Post = require('./Post.jsx'); //scope:local

// PaintingChoices Component 
var PaintingChoices = React.createClass({ 
    
  // setting initial states
  getInitialState: function() {
    return {
      data: {posts: []},      
    };
  },
  // invoked immediately after mounting occurs. Initialization that requires DOM nodes should go here.
  componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
  },
  // invoked immediately before a component is unmounted and destroyed. Cleanup should go here.
  componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
  },
  // on change event
  _onChange : function(){  
      this.setState({
          data : AppStore.getNewPosts()
      });
  },   
   // render
   render: function(props){
      var result = this.state.data;  
      return(
          <div>
             <hr/>
             <h2>Related posts</h2>
             {
                result.posts.map(function(post, i) {
                    return <Post title={post.title} url={post.url} key={i}/>
                })
             }
		 </div> 
         
      );  
   }   
    
});

module.exports = PaintingChoices;