/**
* Header component
* @author: Aakash
* @website: http://developersq.com
*/

// Header child-component 
var Header = React.createClass({    
    render: function(props){
      return(
          <h1>{this.props.blogtitle}</h1> 
      );  
    }  
});

module.exports = Header;