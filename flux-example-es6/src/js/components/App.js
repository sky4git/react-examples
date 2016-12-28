import React from 'react';

//import classnames from 'classnames';
import BackgroundAlt from './BackgroundAlt';
//import classnames from 'classnames';
//import logo from '../../images/logo.svg';
import '../../css/App.css';

function App(props){
  return(
    <div>
      <Button value='red' {...props} />
      <Button value='green' {...props} />
      <Background {...props} />
      <BackgroundAlt {...props} />
    </div> 
  );
}

function Button(props){
  const onButtonClick = () => props.onButtonClick(props.value);
  return(
    <input type="button" value={props.value} onClick={onButtonClick} />
  );
}

function Background(props){
  var color =  props.getActiveButton();
  var divStyle;
  //console.log(color);
  if(color === 'green'){   divStyle = { background: 'green' }   }
  if(color === 'red'){    divStyle = { background: 'red' }   }

  return (
    <div>
      <section className="bgsection" style={divStyle}>{color}</section>
    </div>
  );
}

export default App;