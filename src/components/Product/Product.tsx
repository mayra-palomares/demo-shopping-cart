import IProduct from '../../types/Product';
import { AddToCartIcon } from '../../utils/Icon';
import './Product.css';

type Props = {
	product: IProduct;
};

const Product = ({ product }: Props) => {
	return (
		<li key={product.id} className="product">
			<img src={product.thumbnail} alt={product.title} />
			<div>
				<strong>{product.title}</strong>-${product.price}
			</div>
			<div>
				<AddToCartIcon />
			</div>
		</li>
	);
};

export default Product;
