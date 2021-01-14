import React,{useState,useContext} from 'react';
import { IngredientsContext } from "../Component/IngredientsProvider";
import IngredientsDisplay from "../Component/IngredientsDisplay"
import IngredientsDisplayB from "../Component/IngredientsDisplayBuy"


const Calzone = () => {
    const [ingredients, setIngredients] = useContext(IngredientsContext);
    const [CalzoneIng, setCalzoneIng] = useState([]);
    const AddIng = (props) => {
        if(CalzoneIng.length < 4 ){
            setCalzoneIng(CalzoneIng => [...CalzoneIng,{name:props.name, category:props.category}]);
        }
      }
    return(
        <div>
        <h1>Calzone</h1>
        {ingredients.map(m =>(<IngredientsDisplayB name={m.name} category={m.category} AddIng={AddIng}></IngredientsDisplayB>))}
          <h1>Zde jsou nakoupené předměty :</h1>
          {CalzoneIng.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        
      </div>

);
}
export default Calzone;