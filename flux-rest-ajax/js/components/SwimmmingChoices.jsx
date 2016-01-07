/**
* SwimmmingChoices component
* @author: Aakash
* @website: http://developersq.com
*/

var Post = require('./Post.jsx'); //scope:local

// SwimmmingChoices Component 
var SwimmmingChoices = React.createClass({  
  // setting initial states
  getInitialState: function() {
    return {
      data: '',  
    };
  }, 
  // invoked immediately after mounting occurs. Initialization that requires DOM nodes should go here.
  componentDidMount: function() {
      // change data on store change event
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
      var posts = []; 
      if(result.length > 0){  
          result.map(function(post, i) { 
              posts.push(<Post title={post.title.rendered} url={post.link} key={i} />);
          });         
      }    
      return(
          <div>
             <hr/>
             <h2>Related posts</h2>
             {posts.length ? posts : null }
		 </div>          
      );  
   } 
    
});

module.exports = SwimmmingChoices;