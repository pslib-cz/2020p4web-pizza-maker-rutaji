import React,{useState, createContext} from "react";

export const IngredientsContext = createContext();


export const IngredientsProvider = props => {
    const[ingredients, setingredients] = useState([
        {
            name:"Vepřové maso",
            category:"maso",
            id:1
        },
        {
            name:"Kuřecí maso",
            category:"maso",
            id:2
        },
        {
            name:"Klokaní maso",
            category:"maso",
            id:3
        }
    ]);
    return(
        <IngredientsContext.Provider value={[ingredients, setingredients]}>
                   {props.children}
        </IngredientsContext.Provider>
    )
}