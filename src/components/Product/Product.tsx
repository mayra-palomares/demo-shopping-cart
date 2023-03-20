import React from 'react';
import IProduct from '../../types/IProduct';
import { MdAddShoppingCart } from 'react-icons/md';
import './Product.css';
import useCart from '../../hooks/useCart';

type Props = {
	product: IProduct;
};

const Product = ({ product }: Props) => {
	const { addToCart } = useCart();

	return (
		<li className="productCard">
			<img src={product.thumbnail} alt={product.title} />
			<div className="productDetails">
				<div className="productTitle">
					<span>{product.title}</span>
				</div>
				<div className="productPrice">
					<span>${product.price}</span>
					<button onClick={() => addToCart(product)}>
						<MdAddShoppingCart />
					</button>
				</div>
			</div>
		</li>
	);
};

export default Product;
