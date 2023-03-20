import React, { useId } from 'react';
import useCart from '../../hooks/useCart';
import './CartSummary.css';

const CartSummary = () => {
	const totalId = useId();
	const { cart } = useCart();

	return (
		<aside className="cartSummary">
			<label htmlFor={totalId}>Total</label>
			<span id={totalId}>${cart.total}</span>
		</aside>
	);
};

export default CartSummary;
