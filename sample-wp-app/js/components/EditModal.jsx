/**
* Edit post Model component
* @author: Aakash
* @website: http://developersq.com
*/

var Modal = require('react-bootstrap').Modal; //scope local
var LinkedStateMixin = require('react-addons-linked-state-mixin'); // scope:local

// AddModel child-component 
var EditModal = React.createClass({  
  mixins: [LinkedStateMixin],
    // setting initial state 
  getInitialState: function() {
    var post = this.props.post;
    //console.log(post);  
    return {
        postid: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        status:'publish'
     };
  },
  // hide add Modal
  _close:function() {
    AppActions.hideEditModal(); 
  },  
  // send post data
  _sendPostData: function(){
     var data = {postid:this.state.postid, title:this.state.title, content:this.state.content, excerpt: this.state.excerpt}; 
     AppActions.editPost(data);  
     this._close(); 
  },
  
  // render 
  render: function(props){
      return(
          <div>
            <Modal show={this.props.showmodal} onHide={this._close}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Post: {this.state.postid}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input type="text" label="Title" placeholder="Enter text" valueLink={this.linkState('title')} />
                    <Input type="textarea" label="Content" valueLink={this.linkState('content')}/>
                    <Input type="text" label="Excerpt" valueLink={this.linkState('excerpt')}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this._sendPostData}>Submit</Button>
                </Modal.Footer>
            </Modal>
      </div>
      );  
    }  
});

module.exports = EditModal;