
// Radioinput child component
var RadioGroup = React.createClass({

  // get initial state
  getInitialState: function() {
    return {
      checked: 'swimming'
    };
  },
  // handle change event - pass data to AppActions
  handleChange: function(event){
    var input = event.target;
    this.setState({
       //set toggle state 
        checked: input.id
    });
    var choiceValue = event.target.value; 
    AppActions.sendValue(choiceValue);
  },  
  
  // render componenet
  render: function(){
    return(
      <div>
        <input type='radio' name='radioGroup' checked={this.state.checked === 'swimming'} id='swimming' value='swimming' onChange={this.handleChange} /><Label text='Swimming'/>
        <input type='radio' name='radioGroup' checked={this.state.checked === 'painting'} id='painting' value='painting' onChange={this.handleChange} /><Label text='Painting'/>
      </div>
    );
  }
});

module.exports = RadioGroup;