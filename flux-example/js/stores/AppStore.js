var AppDispatcher = require('../dispatcher/AppDispatcher'); //scope:local
var AppConstants = require('../constants/AppConstants'); //scope:local
var EventEmitter = require('events').EventEmitter; //scope:local
var assign = require('object-assign'); //scope:local

var ActionTypes = AppConstants.ActionTypes; //scope:local
var CHANGE_EVENT = 'change'; //scope:local

var AppStore = assign({}, EventEmitter.prototype, {
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
  //console.log(payload);  
  switch (payload.source) {
    case ActionTypes.CHECKBOX_CHECKED:
      var newStatus = payload.action.item ? false : true;      
      sessionStorage.setItem('newStatus', JSON.stringify(newStatus));
      AppStore.emitChange();
    break;
    case ActionTypes.SEND_VALUE:
      var newChoice = payload.action.item;
      sessionStorage.setItem('newChoice', newChoice);
      AppStore.emitChange(); 
    break;
  }
  return true;
});

module.exports = AppStore;