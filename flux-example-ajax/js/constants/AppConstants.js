var keyMirror = require('keymirror'); //scope:local

module.exports = {
  ActionTypes: keyMirror({
    INITIAL_AJAX_DATA_LOAD: null,  
    CHECKBOX_CHECKED: null,
    SEND_VALUE: null,
    RECEIVE_POSTS: null
  }),
};