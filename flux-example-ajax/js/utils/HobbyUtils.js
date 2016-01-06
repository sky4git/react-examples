/* global AppActions */
/**
 * HobbyUtils module is taking care of ajax requests that AppActions needed
 * @author: Aakash
 * @website: http://www.developersq.com
 */

module.exports = {
    
    // get new posts from ajax requests
    getNewPosts: function(value){
        
        var ajaxSource = this.getAjaxSource(value); 
        var postsArr;
        //var timeout = 5000;
        if(ajaxSource !== ''){
            //set initial ajax request
            $.get(ajaxSource, function(result) {
                // Parse json string into JavaScript array
                postsArr = JSON.parse(result); 
                //setTimeout(function() {
                    AppActions.receivePosts(postsArr);
               // }, timeout);
                
            });
        }
        return null;
    },
    
    // get the ajax source for the type of value
    getAjaxSource: function(value){
        if(value){
            switch(value){
                case 'painting':
                    return 'js/ajax/ajaxpaintnew.html';
                break;
                case 'swimming':
                    return 'js/ajax/ajaxswimnew.html';
                break;
            }
        }
        
        return '';
    }
    
}