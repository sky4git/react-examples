/**
* BlogList component
* @author: Aakash
* @website: http://developersq.com
*/
var Post = require('./Post.jsx'); //scope:local

// BlogList child-component 
var BlogList = React.createClass({    
    
    render: function(props){
        var result = this.props.posts; 
        var posts = []; 
        if(result != null && result.length > 0){  
            result.map(function(post, i) { 
                posts.push(<Post title={post.title.rendered} url={post.link} key={i} postid={post.id}/>);
            });         
        }      
            
        return(
            <div className='bloglist'>
                { posts.length ? posts : null }
            </div> 
        );  
    }   
});

module.exports = BlogList;