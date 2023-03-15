import React from 'react';
import CartProducts from '../components/CartProducts/CartProducts';
import CartSummary from '../components/CartSummary/CartSummary';

const CartPage = () => {
	return (
		<div className="cart">
			<CartProducts />
			<CartSummary />
		</div>
	);
};

export default CartPage;
