var AppDispatcher = require('../dispatcher/AppDispatcher'); //scope:local
var AppConstants = require('../constants/AppConstants'); //scope:local

var AppActions = {
  // changeitem action  
  changeItem: function(item){
    AppDispatcher.handleChangeAction({
      actionType:AppConstants.CHECKBOX_CHECKED,
      item: item
    })
  },
  // sendvalue action
  sendValue: function(item){ 
    AppDispatcher.handleSendValueAction({
       actionType: AppConstants.SEND_VALUE,
       item: item
    })
  },
}

module.exports = AppActions