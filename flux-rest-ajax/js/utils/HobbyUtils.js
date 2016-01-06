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
        //var dataArr;
        //var timeout = 5000;
        if(ajaxSource !== ''){
            //set initial ajax request
            $.get(ajaxSource, function(result) {
                // Parse json string into JavaScript array
                //dataArr = JSON.parse(result); 
                //setTimeout(function() { 
                    console.log(result);
                    //AppActions.receiveData(result);
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
                    return 'http://localhost/wordpressbeta/wp-json/wp/v2/posts/?taxonomy=painting';
                break;
                case 'swimming':
                    return 'http://localhost/wordpressbeta/wp-json/wp/v2/posts/?taxonomy=swimming';
                break;
               /* default:
                    return 'http://localhost/wordpressbeta/wp-json/wp/v2/posts/?taxonomy=category';
                break;*/
            }
        }
        
        return '';
    }
    
}