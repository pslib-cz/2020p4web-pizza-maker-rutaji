import React,{useState,useContext} from 'react';
import { IngredientsContext } from "../Component/IngredientsProvider";
import IngredientsDisplay from "../Component/IngredientsDisplay"
import Add from "../Component/add"

const Ingredients = () => {

    const [ingredients,SetIngredients] = useContext(IngredientsContext)
    return(
        <div>
        <h1>Ingredients</h1>
        {ingredients.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        <Add/>
      </div>

);
}
export default Ingredients;