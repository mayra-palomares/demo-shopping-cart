import React from 'react';
import IProduct from '../../types/IProduct';
import { MdAddShoppingCart } from 'react-icons/md';
import './Product.css';

type Props = {
	product: IProduct;
};

const Product = ({ product }: Props) => {
	return (
		<li className="productCard">
			<img src={product.thumbnail} alt={product.title} />
			<div className="productDetails">
				<div className="productTitle">
					<span>{product.title}</span>
				</div>
				<div className="productPrice">
					<span>${product.price}</span>
					<MdAddShoppingCart />
				</div>
			</div>
		</li>
	);
};

export default Product;
