/* global AppActions */
/**
 * BlogUtils module is taking care of ajax requests that AppActions needed
 * @author: Aakash
 * @website: http://www.developersq.com
 */
var AppConstants = require('../constants/AppConstants'); //scope:local
var ActionInfo = AppConstants.ActionInfo;

module.exports = {
    
    /**
    * Get new posts from ajax requests
    */
    getNewPosts: function(){  
            
        var ajaxSource = this.getAjaxSource({action:'posts'});    
        $.ajax({
            url: ajaxSource,
            method: 'GET',
            success: function(data, status){
                 console.log(status);
                 // sending action to AppActions
                 AppActions.receivePosts(data);
            },
            error: function(xhr, status, error){
                console.log(error);
            }
        }).done(function(data){
            //console.log(data);
        }).fail(function() {
            console.log('fail');
        });
        return null;
    },
    /**
    * Get Next posts
    */
    getNextPosts: function(){
        console.log('getting next posts');
        return null;
    },
    /**
    * Get Previous posts
    */
    getPreviousPosts: function(){
        console.log('gettting previous posts');
       return null;  
    },
    /**
    * Get blog info
    */
    getBlogInfo: function(){
        
        var ajaxSource = this.getAjaxSource({action:'info'});       
        if(ajaxSource !== ''){
            //set ajax request
            $.get(ajaxSource, function(result) {
                 // sending action to AppActions
                 AppActions.receiveBlogInfo(result);
            });
        }
        return null;
    },
    
     /**
     * Get Post preview
     */
    getPostPreview: function(postid){
        if(postid != null){
            
            var ajaxSource = this.getAjaxSource({action:'post',postid:postid});      
            if(ajaxSource !== ''){
                //set initial ajax request
                $.get(ajaxSource, {postid: postid},  function(result) { 
                    // sending action to AppActions
                    AppActions.showPostPreview(result);
                });
            }
            return null;
        }
    },
    
    /**
    * Create a Post
    */
    createPost: function(data){
        console.log(JSON.stringify(data));
        if(data != null){
            var ajaxSource = this.getAjaxSource({action:'create'});    
            $.ajax({
                url: ajaxSource,
                beforeSend: function (request)
                {
                    request.setRequestHeader("Authorization", 'Basic YWFrYXNoOmFkbWlu');
                },
               /* headers: {
                       'Authorization':'Basic YWFrYXNoOmFkbWlu',
                     //  'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                      // 'Content-Type':'application/json'
                },*/
                data: data,
                method: 'POST',
                success: function(data, status){
                    console.log(status);
                    // on success load all posts again
                    module.exports.getNewPosts();
                },
                error: function(xhr, status, error){
                    console.log(error);
                }
            }).done(function(data){
                console.log(data);
            }).fail(function() {
               console.log('fail');
            });
        }
    },
    /**
    * Edit post
    */
    editPost: function(data){
        //console.log(JSON.stringify(data));
        if(data != null){
            var ajaxSource = this.getAjaxSource({action:'edit', postid: data.postid});    
            var postid = data.postid;
            $.ajax({ 
                url: ajaxSource,
                beforeSend: function (request)
                {
                    request.setRequestHeader("Authorization", 'Basic YWFrYXNoOmFkbWlu');
                },
               /* headers: {
                       'Authorization':'Basic YWFrYXNoOmFkbWlu',
                     //  'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                      // 'Content-Type':'application/json'
                },*/
                data: data,
                method: 'POST',
                success: function(data, status){
                   console.log(status);
                    // refresh the post preview
                   AppActions.loadPostPreview(postid);
                    // on success load all posts again
                   module.exports.getNewPosts();                  
                },
                error: function(xhr, status, error){
                    console.log(error);
                }
            }).done(function(data){
               // console.log(data);
            }).fail(function() {
               console.log('fail');
            });
        }  
    },
    /**
    * Delete a post
    */
    deletePost: function(id){
        if(id){
            var ajaxSource = this.getAjaxSource({action:'delete', postid: id});    
            $.ajax({ 
                url: ajaxSource,
                beforeSend: function (request)
                {
                    request.setRequestHeader("Authorization", 'Basic YWFrYXNoOmFkbWlu');
                },
               /* headers: {
                       'Authorization':'Basic YWFrYXNoOmFkbWlu',
                     //  'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
                      // 'Content-Type':'application/json'
                },*/
                method: 'DELETE',
                success: function(data, status){
                   console.log(status);
                   /// try to load preview of post with id 1
                   AppActions.loadPostPreview(1);
                    // on success load all posts again
                   module.exports.getNewPosts();
                  
                },
                error: function(xhr, status, error){
                    console.log(error);
                }
            }).done(function(data){
               // console.log(data);
            }).fail(function() {
               console.log('fail');
            });     
        }
    },
    /**
    * Get the ajax source for the type of value
    */
    getAjaxSource: function(source){ 
        if(source.action){ 
            switch(source.action){
                case 'info':
                    return ActionInfo.BLOGURL+'?rest_route=%2F';
                break;
                case 'posts':
                    return ActionInfo.BLOGURL+'wp-json/wp/v2/posts';
                break;
                case 'post':
                case 'edit':
                case 'delete':
                    return ActionInfo.BLOGURL+'wp-json/wp/v2/posts/'+source.postid;
                break;
                case 'create':
                    return ActionInfo.BLOGURL+'wp-json/wp/v2/posts/';    
                break;
                default:
                    return ActionInfo.BLOGURL+'wp-json/wp/v2/posts?filter[category_name]=blog';
                break;
            }
        }        
        return '';
    }
    
}