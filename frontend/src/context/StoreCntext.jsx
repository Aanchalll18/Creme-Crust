import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
	const [cartItem, setcartItem] = useState({});

	const addtocart = (itemId) => {
		if (!cartItem[itemId]) {
			setcartItem((prev) => ({ ...prev, [itemId]: 1 }));
		} else {
			setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
		}
	};

	const removeItem = (itemId) => {
		setcartItem((prev) => {
			if (prev[itemId] === 1) {
				const updatedCart = { ...prev };
				delete updatedCart[itemId];
				return updatedCart;
			} else {
				return { ...prev, [itemId]: prev[itemId] - 1 };
			}
		});
	};

	// useEffect(()=>{
	//     console.log(cartItem)
	// },[cartItem])
	const getToatalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				let itemInfo = food_list.find((product) => product._id === item);
				totalAmount += itemInfo.price * cartItem[item];
			}
		}
        return totalAmount
	};

	const contextValue = {
		food_list,
		cartItem,
		setcartItem,
		addtocart,
		removeItem,
        getToatalCartAmount
	};
	return (
		<StoreContext.Provider value={contextValue}>
			{props.children}
		</StoreContext.Provider>
	);
};
export default StoreContextProvider;
