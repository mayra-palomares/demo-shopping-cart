import { AddToCartIcon } from './../../utils/Icon';
import IProduct from './../../types/Product';
import Product from '../Product/Product';
import './ProductList.css';

type Props = {
	products: Array<IProduct>;
};

const ProductList = ({ products }: Props) => {
	return (
		<main className="products">
			<ul>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ul>
		</main>
	);
};

export default ProductList;
