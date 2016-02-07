/**
* App.jsx
* Main component for the application.
* @author: Aakash Dodiya
* @website: http://www.developersq.com
*/

AppActions = require('../actions/AppActions'); //scope:global
AppStore = require('../stores/AppStore'); //scope:global
var LoadingMessage = require('./LoadingMessage.jsx'); //scope:local
var Header = require('./Header.jsx'); //scope:local
var BlogList = require('./BlogList.jsx'); //scope:local
//var Pagination = require('./Pagination.jsx'); //scope:local  - will be added in future revision
var Preview = require('./Preview.jsx'); //scope:local
var AddModal = require('./AddModal.jsx'); //scope:local
var EditModal = require('./EditModal.jsx'); //scope:local
Grid = require('react-bootstrap').Grid; //scope global
Row = require('react-bootstrap').Row; //scope global
Col = require('react-bootstrap').Col; //scope global
Button = require('react-bootstrap').Button; //scope global
Input = require('react-bootstrap').Input; //scope local

// main App component
var App = React.createClass({
  // get initial state
  getInitialState: function() {
    return {
      dataLoadingStatus: false,
      blogtitle: 'Sample blog',
      posts: null,
      postpreview: null,
      showAddModal: false,
      showEditModal: false,
      posttoedit: false,
    };
  },
  
  // before component render lets load initial ajax data 
  componentWillMount: function(){
     
      AppActions.loadInitialAjaxData();
   
      /**
      * lets check data load status
      * this is useful to show on screen that we are loading something
      */
      var isDataLoading = AppStore.getDataLoadStatus();
      if(isDataLoading){
          this.setState({
              dataLoadingStatus : true
          })          
      }   
  },
  
  // invoked immediately after mounting occurs. Initialization that requires DOM nodes should go here.
  componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
  },
  
  // invoked immediately before a component is unmounted and destroyed. Cleanup should go here.
  componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
  },
  
  // on change event
  _onChange : function(){
      /**
      * once we get change event from store we should hide data loading text or animation 
      */ 
      var isDataLoading = AppStore.getDataLoadStatus(); 
      if(isDataLoading){
          this.setState({ dataLoadingStatus : true   })          
      }else{
          this.setState({ dataLoadingStatus : false   })
      }  
      /**
      * change blog header title  
      */ 
      var bloginfo = AppStore.getBlogInfo(); 
      if(bloginfo != null){ 
         this.setState({ blogtitle : bloginfo.name })
      }
      /**
      * Get posts data
      */
      var postsData = AppStore.getNewPosts(); 
      if(postsData != null){
          this.setState({ posts : postsData });
      }
      /**
      * Get post preview data
      */
      var postPreview = AppStore.getPostPreview();
      if(postPreview != null){
          this.setState({ postpreview: postPreview })
      }
      /**
      * Open Add Modal
      */
      var openModalStatus = AppStore.getOpenAddModalStatus(); 
      if(openModalStatus){
          this.setState({ showAddModal : true   })
      }
      /**
      * Hide Add Modal
      */
      var hideModalStatus = AppStore.getHideAddModalStatus(); 
      if(hideModalStatus){
          this.setState({ showAddModal : false   })
      }
      /**
      * Open Edit modal
      */
      var postoedit = AppStore.getPostToEdit(); 
      if(postoedit){
          this.setState({ 
              showEditModal: true,
              postoedit: postoedit
           });
      }
      /**
      * Hide Edit modal
      */
      var hideEditModal = AppStore.getHideEditModalStatus();
      if(hideEditModal){
          this.setState({ 
              showEditModal: false,
          });
      }
  },
  
  // Open Model
  _openAddModal: function(){ 
      AppActions.openAddModal();
  },
   
  // render component 
  render: function() {
    /**
    * check loading status
    */  
    var loadingMessage; //console.log('loadingstatus:'+this.state.dataLoadingStatus);
    if(this.state.dataLoadingStatus){
        loadingMessage =  <LoadingMessage />   
    }    
    /**
    * check postpreview status. Do not load post preview if no data exists
    */
    var post, openAddmodal, openEditModal;
    if(this.state.postpreview){
        post = <Preview post={this.state.postpreview} />
    }
    if(this.state.showAddModal){
        openAddmodal = <AddModal showmodal={true} />
    }
    if(this.state.showEditModal){
        openEditModal = <EditModal showmodal={true} post={this.state.postoedit} />
    }
    return( 
       <Grid> 
            <Row className="show-grid">
                <Col xs={12} md={12}><Header blogtitle={this.state.blogtitle} /></Col>
            </Row>
            <Row className="show-grid">
                <Col xs={2} md={2}>
                    <BlogList posts={this.state.posts}/>
                    <Button bsStyle="primary" onClick={this._openAddModal}>Add new post </Button>
                </Col>
                <Col xs={10} md={10}>
                    {post}
                    {openAddmodal}
                    {openEditModal}
                 </Col>
            </Row>                
       </Grid>
    );
  }
});

module.exports = App;