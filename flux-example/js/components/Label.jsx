// Label child-component 
var Label = React.createClass({    
    render: function(props){
      return(
          <label>{this.props.text}</label> 
      );  
    }  
});

module.exports = Label;