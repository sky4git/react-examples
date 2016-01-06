/**
* PaintingChoices component
* @author: Aakash
* @website: http://developersq.com
*/
// PaintingChoices Component 
var PaintingChoices = React.createClass({    
    render: function(props){
      return(
          <div>
            <hr/>
            <h2>Magazine for you</h2>
            <ul>
		  	         <li><Label text='Paintings of golden era'/></li>
                 <li><Label text='Paiting basics'/></li>
                 <li><Label text='Famous paintings'/></li>
            </ul>
		  </div> 
      );  
    }  
});

module.exports = PaintingChoices;