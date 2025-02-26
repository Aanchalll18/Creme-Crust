import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreCntext";

const FoodItem = ({ id, name, price, description, image }) => {
    
    const { cartItem, addtocart, removeItem } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt="" />

                {cartItem[id] ? (
                    <div className="food-item-counter">
                        <img onClick={() => removeItem(id)} src={assets.remove_icon_red} alt="Remove" />
                        <p>{cartItem[id]}</p> 
                        <img onClick={() => addtocart(id)} src={assets.add_icon_green} alt="Add" />
                    </div>
                ) : (
                    <div className="add" onClick={() => addtocart(id)}>
                        <img src={assets.add_icon_white} alt="Add" />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
