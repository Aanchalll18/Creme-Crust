import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItem,setcartItem]=useState({});

    const addtocart=(itemId)=>{
        if(!cartItem[itemId]){
            setcartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
// const removeItem=(itemId)=>{
//     setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
// }

const removeItem = (itemId) => {
    setcartItem((prev) => {
        if (prev[itemId] === 1) {
            // Remove item from cart completely
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        } else {
            return { ...prev, [itemId]: prev[itemId] - 1 };
        }
    });
};


useEffect(()=>{
    console.log(cartItem)
},[cartItem])


    const contextValue={
        food_list,
        cartItem,
        setcartItem,
        addtocart,
        removeItem
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider