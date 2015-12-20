var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  changeItem: function(item){
    AppDispatcher.handleChangeAction({
      actionType:AppConstants.CHECKBOX_CHECKED,
      item: item
    })
  },
  sendValue: function(item){ 
    AppDispatcher.handleSendValueAction({
       actionType: AppConstants.SEND_VALUE,
       item: item
    })
  },
}

module.exports = AppActions