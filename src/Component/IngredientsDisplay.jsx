import React from 'react';

const IngredientsDisplay = props => {
    return(
        <div>
            <h3>{props.name}</h3>
            {props.category}
            
        </div>
    );


}
export default IngredientsDisplay;