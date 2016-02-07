var AppDispatcher = require('../dispatcher/AppDispatcher'); //scope:local
var AppConstants = require('../constants/AppConstants'); //scope:local
var BlogUtils = require('../utils/BlogUtils.jsx'); //scope:local

var ActionTypes = AppConstants.ActionTypes;

var AppActions = {
  // load initial ajax data
  loadInitialAjaxData: function(){
    AppDispatcher.handleInitialAjaxDataLoad({
        actionType: ActionTypes.INITIAL_AJAX_DATA_LOAD,
       // item: dataFor
    });    
    // sending our value to utils to process it further
    BlogUtils.getBlogInfo();  
    BlogUtils.getNewPosts();        
  },
  //referesh posts
  refreshPosts: function(){
    BlogUtils.getNewPosts();   
  }, 
  // receive blog info
  receiveBlogInfo: function(result){ 
      AppDispatcher.handleReceiveBlogInfoAction({
         dataArr: result         
      })
  },
  // receive posts
  receivePosts: function(result){
      AppDispatcher.handleReceivePostsAction({
         dataArr: result         
      })
  },
  // load Post preview
  loadPostPreview: function(postid){
      BlogUtils.getPostPreview(postid);
  },
  // show post preview
  showPostPreview: function(result){
      AppDispatcher.handlePostPreviewAction({
         dataArr: result         
      })
  },
  // open add modal
  openAddModal: function(){ 
      AppDispatcher.handleOpenAddModal({
        actionType: ActionTypes.OPEN_ADD_MODAL,
      })
  },
  // hide add modal
  hideAddModal: function(){
      AppDispatcher.handleHideAddModal({
        actionType: ActionTypes.HIDE_ADD_MODAL,
      })
  },
  // open edit modal
  openEditModal: function(post){ 
      AppDispatcher.handleOpenEditModal({
         actionTypes: ActionTypes.OPEN_EDIT_MODAL,
         data: post
      })    
  },
  hideEditModal: function(){
      AppDispatcher.handleHideEditModal({
          actionTypes: ActionTypes.HIDE_EDIT_MODAL,
      })
  },
  // create a post
  createPost: function(data){
      BlogUtils.createPost(data);
  },
  // edit a post
  editPost: function(data){
     BlogUtils.editPost(data);
  },
  // delete a post
  deletePost: function(id){
     BlogUtils.deletePost(id);  
  },
  // get previous posts
  getPreviousPosts: function(){
      BlogUtils.getPreviousPosts();
  },
  getNextPosts: function(){
      BlogUtils.getNextPosts();
  }
}

module.exports = AppActions;