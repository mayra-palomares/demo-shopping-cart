import React from 'react';

const CartItem = () => {
	return (
		<li>
			<img
				src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
				alt="Iphone"
			/>
			<div>
				<strong>Iphone</strong> - $1499
			</div>
			<div>
				<small>Qty: 1</small>
				<button>+</button>
			</div>
		</li>
	);
};

export default CartItem;
