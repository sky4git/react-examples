/**
* App.jsx
* Main component for the application.
* @author: Aakash Dodiya
* @website: http://www.developersq.com
*/

AppActions = require('../actions/AppActions'); //scope:global
AppStore = require('../stores/AppStore'); //scope:global
Label = require('./Label.jsx'); //scope:global
var CheckBoxInput = require('./CheckBoxInput.jsx'); //scope:local
var RadioGroup = require('./RadioGroup.jsx'); //scope:local
var InputCom = require('./InputCom.jsx'); //scope:local
var SwimmmingChoices = require('./SwimmmingChoices.jsx'); //scope:local
var PaintingChoices = require('./PaintingChoices.jsx'); //scope:local
var LoadingMessage = require('./LoadingMessage.jsx'); //scope:local

// main App component
var App = React.createClass({
    
  // get initial state
  getInitialState: function() {
    return {
      radioValue: 'swimming',
      dataLoadingStatus: false   
    };
  },
  
  // before component render lets load initial ajax data 
  componentWillMount: function(){
      var dataFor; 
      if(this.state.radioValue == 'swimming'){
          dataFor = 'swimming';
      }else{
          dataFor = 'painting';
      }
      AppActions.loadInitialAjaxData(dataFor);
      
      /**
      * lets check data load status
      * this is useful to show on screen that we are loading something
      */
      var isDataLoading = AppStore.getDataLoadStatus();
      if(isDataLoading){
          this.setState({
              dataLoadingStatus : true
          })          
      }   
  },
  
  // invoked immediately after mounting occurs. Initialization that requires DOM nodes should go here.
  componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
  },
  
  // invoked immediately before a component is unmounted and destroyed. Cleanup should go here.
  componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
  },
  
  // on change event
  _onChange : function(){
      /**
      * once we get change event from store we should hide data loading text or animation 
      */ 
      var isDataLoading = AppStore.getDataLoadStatus(); 
      if(isDataLoading){
          this.setState({ dataLoadingStatus : true   })          
      }else{
          this.setState({ dataLoadingStatus : false   })
      }  
      /**
      * change choice value on onchange event  
      */ 
      this.setState({
          radioValue : AppStore.getChoiceValue()
      });
  },
  
  // render component 
  render: function() {
    /**
    * check loading status
    */  
    var loadingMessage; console.log('loadingstatus:'+this.state.dataLoadingStatus);
    if(this.state.dataLoadingStatus){
        loadingMessage =  <LoadingMessage />   
    }    
    /**
    * check dataChoices status
    */         
    var dataChoices;     
    if(this.state.radioValue == 'swimming'){
       dataChoices = <SwimmmingChoices />;
    }else{
       dataChoices = <PaintingChoices />;
    }
    return( 
      <form>  
          <p>
              <Label text='first name:'/>
              <InputCom type='text' /> 
          </p>
          <p>
              <Label text='last name:'/> 
              <InputCom type='text' />
          </p>
          <p>
              <Label text='email:'/>
              <InputCom type='email' />
          </p> 
          <p>
              <Label text='Age:'/>
              <InputCom type='text' />
          </p>
          <p>
              <Label text='Gender:'/>
              <CheckBoxInput ischecked={true} value='male'/> <Label text='Male'/>
              <CheckBoxInput ischecked={false} value='female'/> <Label text='Female'/>
          </p>
          <div>
              <Label text='Hobbies:'/>
              <RadioGroup />
          </div>
          {loadingMessage}
          {dataChoices}
          
     </form> 
    );
  }
});

module.exports = App;