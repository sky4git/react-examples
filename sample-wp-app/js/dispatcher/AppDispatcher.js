var Dispatcher = require('flux').Dispatcher; //scope:local
var assign = require('object-assign'); //scope:local
var AppConstants = require('../constants/AppConstants'); //scope:local

var ActionTypes = AppConstants.ActionTypes;


var AppDispatcher = assign(new Dispatcher(), {
  // Dispatch received initial data 
  handleInitialAjaxDataLoad: function(action){
     this.dispatch({
         source: 'INITIAL_AJAX_DATA_LOAD',
         action: action
     })   
  }, 
  // Despatch received blog info
  handleReceiveBlogInfoAction: function(action){
      this.dispatch({
          source: ActionTypes.BLOG_INFO_LOAD,
          action: action
      })
  },
  // Dispatch received post data
  handleReceivePostsAction: function(action){
      this.dispatch({
          source: ActionTypes.RECEIVE_POSTS,
          action: action
      })
  },
  // Dispatch show preview action
  handlePostPreviewAction: function(action){
      this.dispatch({
          source: ActionTypes.SHOW_PREVIEW,
          action: action
      })
  },
  // Dispatch open add modal
  handleOpenAddModal: function(action){ 
      this.dispatch({
          source: ActionTypes.OPEN_ADD_MODAL,
          action: action
      })
  },
  // Dispatch hide Add modal
  handleHideAddModal:  function(action){ 
      this.dispatch({
          source: ActionTypes.HIDE_ADD_MODAL,
          action: action
      })
  },
  // Dispatch open edit modal
  handleOpenEditModal: function(action){
      this.dispatch({
          source: ActionTypes.OPEN_EDIT_MODAL,
          action: action
      })
  },
  // Dispatch hide Edit modal
  handleHideEditModal:  function(action){ 
      this.dispatch({
          source: ActionTypes.HIDE_EDIT_MODAL,
          action: action
      })
  },
  
});

module.exports = AppDispatcher; 