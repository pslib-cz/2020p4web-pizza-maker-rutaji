import React,{useState, useContext} from "react";
import  {IngredientsContext} from './IngredientsProvider';

 const AddIngredient = () =>{
    const[name, setName] = useState("");
    const[category, setCategory] = useState('');
    const[ingredients, setIngredients] = useContext(IngredientsContext);
    
    const updateName = e => {
        setName(e.target.value);
    }

    const updateCategory = e =>{
        setCategory(e.target.value);
    }
    
    const addIngredient = e =>{
        e.preventDefault();
        setIngredients(prevIngredients => [...prevIngredients,{name:name, category:category}]);
    }
    
    
    return(
        <form onSubmit={addIngredient}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="category" value={category} onChange={updateCategory}/>
            <button>Submit</button>
        </form>


        

     );
}
export default AddIngredient;