import AppDispatcher from '../dispatcher/AppDispatcher'; 
import ActionTypes from '../constants/ActionTypes';

const AppActions = {
  // changeitem action  
  changeItem(item){
    AppDispatcher.handleChangeAction({
      actionType:ActionTypes.CHECKBOX_CHECKED,
      item: item
    })
  },
  // sendvalue action
  sendValue(item){ 
    AppDispatcher.handleSendValueAction({
       actionType: ActionTypes.SEND_VALUE,
       item: item
    })
  },
  buttonClicked(value){ 
    AppDispatcher.dispatch({
      type: ActionTypes.BUTTON_CLICKED,
      value
    });
  }
}

//module.exports = AppActions
export default AppActions;