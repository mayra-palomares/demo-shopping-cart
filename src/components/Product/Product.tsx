import IProduct from '../../types/Product';
import { AddToCartIcon } from '../../utils/Icon';
import './Product.css';

type Props = {
	product: IProduct;
};

const Product = ({ product }: Props) => {
	return (
		<li key={product.id} className="productCard">
			<img src={product.thumbnail} alt={product.title} />
			<div className="productDetails">
				<div className="productTitle">
					<span>{product.title}</span>
				</div>
				<div className="productPrice">
					<span>${product.price}</span>
					<AddToCartIcon />
				</div>
			</div>
		</li>
	);
};

export default Product;
