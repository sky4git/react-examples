
// CheckBoxinput child component
var CheckBoxInput = React.createClass({
  // prop type validation
  propTypes: {
    ischecked: React.PropTypes.bool,
    value: React.PropTypes.string
  },
  // set default props values
  getDefaultProps: function() {
    return {
      value: '',
      ischecked: false
    };
  },
  // get initial state
  getInitialState: function() {
    return {
      checkvalue: this.props.value,
      checked: this.props.ischecked
    };
  },
  // handle change event pas data to AppActions
  handleChange: function(event){
   // var input = event.target;
    var checkedStatus =  this.state.checked;
    this.setState({
       //set toggle state 
        checked: checkedStatus ? false : true
    });
    //sending change event in AppActions so store can process it for it if other views needs it
    AppActions.changeItem(checkedStatus); 
  },  
  // render componenet
  render: function(){
    // check for toggled state
    var ischeckedValue;   
    if(this.state.checked){
      ischeckedValue = 'checked';
    } else {
      ischeckedValue = '';
    }
   
    return(
      <input type='checkbox' checked={ischeckedValue} value={this.state.checkvalue} onChange={this.handleChange} />
    );
  }
});

module.exports = CheckBoxInput;