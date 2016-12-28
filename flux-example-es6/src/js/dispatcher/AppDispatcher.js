import {Dispatcher} from 'flux';
//import assign from 'object-assign';

/*var AppDispatcher = assign(new Dispatcher(), {
  handleChangeAction: function(action) { 
    this.dispatch({
      source: 'CHECKBOX_CHECKED',
      action: action
    });
  },
  handleSendValueAction: function(action){ 
    this.dispatch({
      source: 'SEND_VALUE',
      action: action
    })
  }
});

export default AppDispatcher; */
export default new Dispatcher();