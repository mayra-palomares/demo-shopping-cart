import React from 'react';
import { MdClear } from 'react-icons/md';
import useCart from '../../hooks/useCart';
import CartItem from '../../types/CartItem';
import './CartLineItem.css';

type Props = {
	item: CartItem;
};

const CartLineItem = ({ item }: Props) => {
	const { editCartItem, removeCartItem } = useCart();

	const onDecrement = () => {
		if (item.quantity > 1) {
			const newQty = item.quantity - 1;
			editCartItem(item.productId, newQty);
		} else if (item.quantity === 1) {
			removeCartItem(item.productId);
		}
	};
	const onIncrement = () => {
		const newQty = item.quantity + 1;
		editCartItem(item.productId, newQty);
	};

	return (
		<tr className="cartItem">
			<td className="productName">
				<img src={item.imageUrl} alt={item.name} width="130px" height="90px" />
				<p>{item.name}</p>
			</td>
			<td>
				<button onClick={() => onDecrement()}>-</button>
				<small>{item.quantity}</small>
				<button onClick={() => onIncrement()}>+</button>
			</td>
			<td>
				<small>${item.price}</small>
			</td>
			<td>
				<button onClick={() => removeCartItem(item.productId)}>
					<MdClear />
				</button>
			</td>
		</tr>
	);
};

export default CartLineItem;
