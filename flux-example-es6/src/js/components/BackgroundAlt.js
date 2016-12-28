import React from 'react';

const BackgroundAlt = (props) => {
        var color =  props.getActiveButton();
        var divStyle;
        if(color === 'green'){   divStyle = { background: 'red' }   }
        if(color === 'red'){    divStyle = { background: 'green' }   }
        return(
            <section>
                <div className="bgsection" style={divStyle}>{color}</div>
            </section>
        );
 
}

export default BackgroundAlt;