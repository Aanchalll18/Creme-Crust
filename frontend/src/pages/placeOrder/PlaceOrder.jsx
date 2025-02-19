import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreCntext";

const PlaceOrder = () => {
  const {getToatalCartAmount}=useContext(StoreContext)
	return (
		<form className="place-order">
			<div className="place-order-left">
				<p className="title">Delivery Information</p>
				<div className="multi-feilds">
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="last Name" />
				</div>
				<div className="multi-feilds">
					<input type="text" placeholder="Email address" />
					<input type="text" placeholder="Street" />
				</div>
				<div className="multi-feilds">
					<input type="text" placeholder="City" />
					<input type="text" placeholder="State" />
				</div>
				<div className="multi-feilds">
					<input type="text" placeholder="Zip code" />
					<input type="text" placeholder="Country" />
				</div>
				<input type="text" placeholder="Phone number" />
			</div>
			<div className="place-order-right">
				<div className="cart-total">
					<div>
						<h2>Cart Totals</h2>
						<div className="cart-total-details">
							<p>Subtotal</p>
							<p>${getToatalCartAmount()}</p>
						</div>
						<div className="cart-total-details">
							<p>Delivery Fee</p>
							<p>${getToatalCartAmount() === 0 ? 0 :2}</p>
						</div>
						<div className="cart-total-details">
							<p>Total</p>
							<p>${ getToatalCartAmount()===0 ?0:getToatalCartAmount() + 2}</p>
						</div>
					</div>
					<button onClick={() => navigate("/order")}>
						PROCEED TO CHECKOUT
					</button>
				</div>
			</div>
		</form>
	);
};

export default PlaceOrder;
