/**
* SwimmmingChoices component
* @author: Aakash
* @website: http://developersq.com
*/
// SwimmmingChoices Component 
var SwimmmingChoices = React.createClass({    
    render: function(props){
      return(
          <div>
             <hr/>
             <h2>Magazine for you</h2>
             <ul>
                <li><Label text='Swimming basics'/></li>
                <li><Label text='Pro Swimming'/></li>
                <li><Label text='Swimming freestyle'/></li>
             </ul>
		 </div> 
      );  
    }  
});

module.exports = SwimmmingChoices;