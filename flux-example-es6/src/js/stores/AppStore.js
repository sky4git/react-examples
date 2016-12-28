import AppDispatcher from '../dispatcher/AppDispatcher'; 
import ActionTypes from '../constants/ActionTypes';
import States from './States';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';

class AppStore extends ReduceStore {
  /*
  * contstructor
  */
  constructor(){
    super(AppDispatcher);
  }
  /**
   * Get Initial state
   */
  getInitialState() {
    return Immutable.OrderedMap();
  }
  /**
   * Get status method for the components
   */ 
  getActiveButton() {
    var activeButton = sessionStorage.getItem('buttonClicked');
    return activeButton;
  }
  /**
   * Get value method for components
   */
  getChoiceValue(){
    var newChoice = sessionStorage.getItem('newChoice');
    return newChoice;
  }
  /**
   * Emit change
   */
  /*emitChange() {
    this.emit(CHANGE_EVENT);
  }
  /**
   * @param {function} callback
   */
  /*addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {function} callback
   */
  /*removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }*/


//AppDispatcher.register(function(payload){
  //console.log(payload);  
  reduce(state, action){
    console.log(action.value); 
    switch (action.type) {
      /*case ActionTypes.CHECKBOX_CHECKED:
        var newStatus = payload.action.item ? false : true;      
        sessionStorage.setItem('newStatus', JSON.stringify(newStatus));
       // AppStore.emitChange();
      break;
      case ActionTypes.SEND_VALUE:
        var newChoice = payload.action.item;
        sessionStorage.setItem('newChoice', newChoice);
       // AppStore.emitChange(); 
      break;*/
      case ActionTypes.BUTTON_CLICKED:
        var value = action.value;
        sessionStorage.setItem('buttonClicked', value);
        return state.set(value, new States({
          value,
        }));

      default:
        return state;
    }    
  }// end func
} 
//});

export default new AppStore();