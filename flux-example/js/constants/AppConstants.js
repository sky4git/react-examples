/*module.exports = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
};*/

   
var keyMirror = require('keymirror');

module.exports = {
  ActionTypes: keyMirror({
    CHECKBOX_CHECKED: null,
    SEND_VALUE: null
  }),
};