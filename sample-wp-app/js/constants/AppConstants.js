var keyMirror = require('keymirror'); //scope:local

module.exports = {
  ActionTypes: keyMirror({
    INITIAL_AJAX_DATA_LOAD: null,
    SHOW_PREVIEW: null,  
    BLOG_INFO_LOAD: null,
    RECEIVE_POSTS: null,
    OPEN_ADD_MODAL: null,
    OPEN_EDIT_MODAL: null,
    HIDE_EDIT_MODAL: null,
  }),
  ActionInfo:({
      BLOGURL : 'http://localhost/wordpressbeta/',
  })
};