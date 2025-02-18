import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreCntext";

const Cart = () => {
	const { cartItem, food_list, removeItem } = useContext(StoreContext);
	return (
		<div className="cart">
			<div className="cart-items">
				<div className="cart-items-title">
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{food_list.map((item, index) => {
					if (cartItem[item._id] > 0) {
						return (
							<div className="cart-items-title cart-item-item">
								<img src={item.image} alt="" />
								<p>{item.name}</p>
								<p>${item.price}</p>
								<p>{cartItem[item._id]}</p>
								<p>${item.price * cartItem[item._id]}</p>
								<p onClick={() => removeItem(item._id)} className="cross">
									x
								</p>
							</div>
						);
					}
				})}
			</div>
			<div className="cart-bottom">
				<div className="cart-total">
					<div>
						<h2>Cart Totals</h2>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>{0}</p>
						</div>
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>{2}</p>
						</div>
						<div className="cart-total-details">
							<p>Total</p>
							<p>0</p>
						</div>
					</div>
					<button>PROCEED TO CHECKOUT</button>
				</div>
				<div className="cart-promocode">
					<div>
						<p>If you have promo code,Enter it here</p>
            <div className="cart-promocode-input">
                  <input type="text" placeholder="promo code" />
                  <button>Submit</button>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
