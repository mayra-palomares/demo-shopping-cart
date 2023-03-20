import React from 'react';
import CartLineItem from '../CartLineItem/CartLineItem';
import { MdRemoveShoppingCart } from 'react-icons/md';
import './CartProducts.css';
import useCart from '../../hooks/useCart';

const CartProducts = () => {
	const { cart, clearCart } = useCart();
	return (
		<main className="cartProducts">
			<div className="cartActions">
				<h2>Cart</h2>
				<button onClick={() => clearCart()}>
					<MdRemoveShoppingCart />
					Remove
				</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => (
						<CartLineItem item={item} key={item.productId} />
					))}
				</tbody>
			</table>
		</main>
	);
};

export default CartProducts;
