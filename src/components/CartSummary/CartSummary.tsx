import React from 'react';

const CartSummary = () => {
	return (
		<aside>
			<div>
				<label htmlFor="">Subtotal</label>
				<span>$100</span>
			</div>
			<div>
				<label htmlFor="">Discount</label>
				<span>$0</span>
			</div>
			<div>
				<label htmlFor="">Total</label>
				<span>$100</span>
			</div>

			<button>Checkout</button>
		</aside>
	);
};

export default CartSummary;
