/*var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <button onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </button>
    );
  }
});

ReactDOM.render(
  <LikeButton />,
  document.getElementById('example')
);*/

//* test styles
var TestStyle = React.createClass({
  getInitialState: function(){
   // var dwidth;
    return { dwidth:'100', dheight:'100' };
  },
  handleWidthChange: function(event){
   // console.log(event.target.value);
    return this.setState({dwidth: event.target.value });
  },
  handleHeightChange: function(event){
    console.log(event.target.value);
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
  <TestStyle 
    ref={function(input) {
         // alert('test');
      }}
  />,
  document.getElementById('testStyle')
);
