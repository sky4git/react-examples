var Dispatcher = require('flux').Dispatcher; //scope:local
var assign = require('object-assign'); //scope:local

var AppDispatcher = assign(new Dispatcher(), {
  handleInitialAjaxDataLoad: function(action){
     this.dispatch({
         source: 'INITIAL_AJAX_DATA_LOAD',
         action: action
     })   
  }, 
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
  },
  handleReceiveDataAction: function(action){
      this.dispatch({
          source: 'RECEIVE_DATA_DISPATCHED',
          action: action
      })
  }
});

module.exports = AppDispatcher; 