/**
* PostsGroupHTML component
* @description: Display only raw data returned from ajax url. ReactJs by default sanitize all the data and
*               it doesn't recommend to set innerHTML directly into the component. This is the reason we are just displaying 
*               plain text rather than HTML bits. Read more about dangerously set inner html here.
*               https://facebook.github.io/react/tips/dangerously-set-inner-html.html 
* @author: Aakash
* @website: http://developersq.com
*/

// Posts Group
var PostsGroupHTML = React.createClass({
  // setting initial states
  getInitialState: function() {
    return {
      html: '<h3>Lorem ipsum</h3>',      
    };
  },

  componentDidMount: function() {
    //set ajax request
    $.get(this.props.source, function(result) {
      if (this.isMounted()) {
        this.setState({
          html: result
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
         {this.state.html} 
      </div>
    );
  }
});

module.exports = PostsGroupHTML;