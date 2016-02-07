/**
* Preview component
* @author: Aakash
* @website: http://developersq.com
*/


// Preview child-component 
var Preview = React.createClass({    
    
    // open edit modal
    _openEditModal: function(){
         var post = this.props.post;
         AppActions.openEditModal(post);  
    },
    // open delete modal
    _openDeleteModal:function(){
         var id = this.props.post.id;
         AppActions.deletePost(id);  
    },
    // render
    render: function(props){
      var post = this.props.post;
      //var postContent = function(){ return }
      return(
          <Grid> 
            <Row>
                <Col xs={6} md={6}>
                     <Button bsStyle="danger" onClick={this._openDeleteModal}>Delete</Button>
                </Col>
                <Col xs={6} md={6}>
                     <Button bsStyle="primary" onClick={this._openEditModal}>Edit</Button>
                </Col>
            </Row>
            <Row>
               <Col xs={12} md={12}> <h1>{post.title.rendered}</h1> </Col>
            </Row>
             <Row>
               <Col xs={12} md={12}>  <div dangerouslySetInnerHTML={{__html: post.content.rendered}} /> </Col>
            </Row>
          </Grid>  
      );  
    }  
});

module.exports = Preview;