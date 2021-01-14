import React from 'react';

const IngredientsDisplayB = props => {
    return(
        <div>
            <h3>{props.name}</h3>
            {props.category}
            <button onClick={e => {props.AddIng({name:props.name, category:props.category})}}>Objednej</button>
            
        </div>
    );


}
export default IngredientsDisplayB;