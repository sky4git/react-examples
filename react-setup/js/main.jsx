// main.js
var React = require('react');
var ReactDOM = require('react-dom');
console.log('oye hoye');
var TestStyle = React.createClass({
  getInitialState: function(){
      return { dwidth:'100', dheight:'100' };
  },
  handleWidthChange: function(event){
   // console.log(event.target.value);
    return this.setState({dwidth: event.target.value });
  },
  handleHeightChange: function(event){
   // console.log(event.target.value);
    return this.setState({dheight: event.target.value });
  },
	render: function(){
    var dwidth = this.state.dwidth;
    var dheight = this.state.dheight;
    //console.log(dwidth+ '' + dheight);
    var divStyle = {
      border: '1px solid #f00',
      width: dwidth+'px',
      height: dheight+'px' 
    };
		return(
			<div>
				<p> Section width : <input type="number" min='100' max='1000' value={dwidth} onChange={this.handleWidthChange} /></p>
        <p> Section height : <input type="number" min='100' max='500' value={dheight} onChange={this.handleHeightChange} /></p>				
				<div style={divStyle}/>
			</div>
		);
	}
});

ReactDOM.render(
  <TestStyle />,
  document.getElementById('example')
);