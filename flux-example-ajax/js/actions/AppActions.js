var AppDispatcher = require('../dispatcher/AppDispatcher'); //scope:local
var AppConstants = require('../constants/AppConstants'); //scope:local
var HobbyUtils = require('../utils/HobbyUtils'); //scope:local

var AppActions = {
  // load initial ajax data
  loadInitialAjaxData: function(dataFor){
    AppDispatcher.handleInitialAjaxDataLoad({
        actionType: AppConstants.INITIAL_AJAX_DATA_LOAD,
       // item: dataFor
    });    
    // sending our value to utils to process it further
    HobbyUtils.getNewPosts(dataFor);        
  },  
  // change item action  
  changeItem: function(item){
    AppDispatcher.handleChangeAction({
      actionType:AppConstants.CHECKBOX_CHECKED,
      item: item
    })
  },
  // send value action
  sendValue: function(value){ 
    AppDispatcher.handleSendValueAction({
       actionType: AppConstants.SEND_VALUE,
       item: value
    });
    // sending our value to utils to process it further
    HobbyUtils.getNewPosts(value);
  },
  // receive posts
  receivePosts: function(postsArr){
      AppDispatcher.handleReceivePostsAction({
        // actionType: AppConstants.RECEIVE_POSTS,
         posts: postsArr         
      })
  }
  
}

module.exports = AppActions;