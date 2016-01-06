/**
* Input component
* @author: Aakash
* @website: http://developersq.com
*/

// Input child component 
var InputCom = React.createClass({

  //initial state
  getInitialState: function() {
    return {
      type: this.props.type,
      value: this.props.value
    };
  },
  // default props
  getDefaultProps: function() {
    return {
      value: '',
      type: 'text'
    };
  },
  handleChange: function(event){
     var input = event.target;
     this.setState({
        value: input.value
     });
  },
  /*shouldComponentUpdate: function(nextProps, nextState) {
      console.log('should update');
      return nextState;
  },*/
  render : function(props){
      var type = this.state.type; 
      var value = this.state.value;
      return(
          <input type={type} value={value} onChange={this.handleChange}/>
      );
  }  
});

module.exports = InputCom;