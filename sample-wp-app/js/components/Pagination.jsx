/**
* Pagination component
*/

// Pagination child-component 
var Pagination = React.createClass({    
    
    // get previous posts
    _getPreviousPosts: function(event){
        event.preventDefault();
        var previousnumber = event.target.dataset.previousnumber;
        AppActions.getPreviousPosts();   
    },
    //get next posts
    _getNextPosts: function(event){
        event.preventDefault(); 
        var nextnumber = event.target.dataset.nextnumber;
        AppActions.getNextPosts();  
    }, 
    // render
    render: function(props){
      return(
              <Row>
                    <Col xs={6} md={6}>
                        <a href='#' data-previousnumber={this.props.previousnumber} onclick={this._getPrviousPosts}> Prev </a>
                    </Col>
                    <Col xs={6} md={6}>
                        <a href='#' data-nextnumber={this.props.nextnumber} onclick={this._getNextPosts}> Next </a>
                    </Col>
              </Row>
      );  
    }  
});

module.exports = Pagination;