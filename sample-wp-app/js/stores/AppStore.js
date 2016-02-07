var AppDispatcher = require('../dispatcher/AppDispatcher'); //scope:local
var AppConstants = require('../constants/AppConstants'); //scope:local
var EventEmitter = require('events').EventEmitter; //scope:local
var assign = require('object-assign'); //scope:local

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
  /**
   * get initial data load status
   */
  getDataLoadStatus: function(){
    var dataLoadStatus = sessionStorage.getItem('isDataLoading');
    return JSON.parse(dataLoadStatus);  
  },
  /**
   * Get blog Info
   */
  getBlogInfo: function(){
      var bloginfo = sessionStorage.getItem('bloginfo');
      return JSON.parse(bloginfo);
  },  
  /**
   * Get new posts
   */
  getNewPosts: function(){
      var posts = sessionStorage.getItem('posts');
      return JSON.parse(posts);
  },
  /**
   * Get post preview
   */
  getPostPreview: function(){
      var post = sessionStorage.getItem('post');
      return JSON.parse(post);
  },
  /**
   * Open Add Modal
   */
  getOpenAddModalStatus: function(){ 
     var openAddModal = sessionStorage.getItem('openAddModal'); 
     return JSON.parse(openAddModal);   
  },
  /**
   * Hide Add Modal
   */
  getHideAddModalStatus: function(){ 
     var hideAddModal = sessionStorage.getItem('hideAddModal'); 
     return JSON.parse(hideAddModal);   
  },
  /**
   * Open Edit modal with post to edit info
   */
  getPostToEdit: function(){
      var posttoedit = sessionStorage.getItem('posttoedit');
      return JSON.parse(posttoedit);
  },
   /**
   * Hide Edit Modal
   */
  getHideEditModalStatus: function(){ 
     var hideEditModal = sessionStorage.getItem('hideEditModal'); 
     return JSON.parse(hideEditModal);   
  },
  /**
   * Emit change
   */
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register(function(payload){
  console.log(payload.source);  
  switch (payload.source) {
    case ActionTypes.INITIAL_AJAX_DATA_LOAD:
      var initialLoad = true; 
      sessionStorage.setItem('isDataLoading', JSON.stringify(initialLoad));
      AppStore.emitChange();
    break;  
    case ActionTypes.BLOG_INFO_LOAD:
      var bloginfo = payload.action.dataArr;  
      sessionStorage.setItem('isDataLoading', JSON.stringify(false));
      sessionStorage.setItem('bloginfo',  JSON.stringify(bloginfo));
      AppStore.emitChange(); 
    break;
   case ActionTypes.RECEIVE_POSTS:
      var posts = payload.action.dataArr; 
      sessionStorage.setItem('isDataLoading', JSON.stringify(false));
      sessionStorage.setItem('posts',  JSON.stringify(posts));
      AppStore.emitChange();
    break;
    case ActionTypes.SHOW_PREVIEW:
      var post = payload.action.dataArr; 
      //sessionStorage.setItem('isDataLoading', JSON.stringify(false));
      sessionStorage.setItem('post',  JSON.stringify(post));
      AppStore.emitChange();
    break;
    case ActionTypes.OPEN_ADD_MODAL:
      sessionStorage.setItem('openAddModal', JSON.stringify(true)); 
      sessionStorage.setItem('hideAddModal', JSON.stringify(false)); 
      AppStore.emitChange();
    break;
    case ActionTypes.HIDE_ADD_MODAL:
      sessionStorage.setItem('openAddModal', JSON.stringify(false)); 
      sessionStorage.setItem('hideAddModal', JSON.stringify(true)); 
      AppStore.emitChange();
    break;
    case ActionTypes.OPEN_EDIT_MODAL:
        var posttoedit = payload.action.data; 
        sessionStorage.setItem('posttoedit',  JSON.stringify(posttoedit));
        sessionStorage.setItem('openEditModal', JSON.stringify(true)); 
        sessionStorage.setItem('hideEditModal', JSON.stringify(false)); 
        sessionStorage.setItem('hideAddModal', JSON.stringify(true)); 
        AppStore.emitChange();
    break;
    case ActionTypes.HIDE_EDIT_MODAL:
      sessionStorage.setItem('openEditModal', JSON.stringify(false)); 
      sessionStorage.setItem('hideEditModal', JSON.stringify(true));
      sessionStorage.setItem('hideAddModal', JSON.stringify(true)); 
      AppStore.emitChange();
    break;
  }
  return true;
});

module.exports = AppStore;