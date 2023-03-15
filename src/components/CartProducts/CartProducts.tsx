import React from 'react';
import CartItem from '../CartItem/CartItem';
import { MdRemoveShoppingCart } from 'react-icons/md';
import './CartProducts.css';

const CartProducts = () => (
	<main className="cartProducts">
		<div className="cartActions">
			<h2>Cart</h2>
			<button>
				<MdRemoveShoppingCart />
				Remove
			</button>
		</div>
		<table>
			<tr>
				<th>Product</th>
				<th>Quantity</th>
				<th>Price</th>
				<th></th>
			</tr>
			<CartItem />
		</table>
	</main>
);

export default CartProducts;
