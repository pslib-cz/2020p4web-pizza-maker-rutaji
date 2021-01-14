import React,{useContext,useState} from 'react';
import { IngredientsContext } from "../Component/IngredientsProvider";
import IngredientsDisplay from "../Component/IngredientsDisplay"
import IngredientsDisplayB from "../Component/IngredientsDisplayBuy"


const Pizza = () => {
    const [ingredients, setIngredients] = useContext(IngredientsContext);
  const [pizzaIng, setPizzaIng] = useState([]);
  const AddIng = (props) => {
    if(pizzaIng.length < 4 ){
    setPizzaIng(pizzaIng => [...pizzaIng,{name:props.name, category:props.category}]);
    }
    console.log(pizzaIng.length )
  }
    return(
        <div>
        <h1>Pizza</h1>
        {ingredients.map(m =>(<IngredientsDisplayB name={m.name} category={m.category} AddIng={AddIng}></IngredientsDisplayB>))}
          <h1>Zde jsou nakoupené předměty :</h1>
          {pizzaIng.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        
      </div>

);
}
export default Pizza;