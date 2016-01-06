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
   * Get status method for the components
   */ 
  getStatus: function() {
    var newStatus = sessionStorage.getItem('newStatus');
    return JSON.parse(newStatus);
  },
  /**
   * Get value method for components
   */
  getChoiceValue : function(){
    var newChoice = sessionStorage.getItem('newChoice');
    return newChoice;
  },
  /**
   * Get new posts
   */
  getNewPosts: function(){
      var posts = sessionStorage.getItem('posts');
      return JSON.parse(posts);
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
  //console.log(payload.source);  
  switch (payload.source) {
    case ActionTypes.INITIAL_AJAX_DATA_LOAD:
      var initialLoad = true; 
      sessionStorage.setItem('isDataLoading', JSON.stringify(initialLoad));
      AppStore.emitChange();
    break;  
    case ActionTypes.CHECKBOX_CHECKED:
      var newStatus = payload.action.item ? false : true;      
      sessionStorage.setItem('newStatus', JSON.stringify(newStatus));
      AppStore.emitChange();
    break;
    case ActionTypes.SEND_VALUE:
      var newChoice = payload.action.item;
      sessionStorage.setItem('isDataLoading', JSON.stringify(true));
      sessionStorage.setItem('newChoice', newChoice);
      AppStore.emitChange(); 
    break;
    case 'RECEIVE_POSTS_DISPATCHED':
      var posts = payload.action.posts;
      sessionStorage.setItem('isDataLoading', JSON.stringify(false));
      sessionStorage.setItem('posts', JSON.stringify(posts));
      AppStore.emitChange();
    break;
  }
  return true;
});

module.exports = AppStore;