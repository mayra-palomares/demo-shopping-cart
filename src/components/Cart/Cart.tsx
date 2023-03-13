import React from 'react';
import { ClearCartIcon } from '../../utils/Icon';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
	return (
		<main className="cart">
			<ul>
				<CartItem />
			</ul>

			<button>
				<ClearCartIcon />
			</button>
		</main>
	);
};

export default Cart;
