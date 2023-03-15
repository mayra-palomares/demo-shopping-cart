import React from 'react';
import { MdClear } from 'react-icons/md';
import './CartItem.css';

const CartItem = () => {
	return (
		<tr className="cartItem">
			<td className="productName">
				<img
					src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
					alt="Iphone"
					width="130px"
					height="90px"
				/>
				<p>Iphone</p>
			</td>
			<td>
				<button>-</button>
				<small>1</small>
				<button>+</button>
			</td>
			<td>
				<small>$1500</small>
			</td>
			<td>
				<button>
					<MdClear />
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
