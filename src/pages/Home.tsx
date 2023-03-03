import { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import IProduct from '../types/Product';
import { products as initialProducts } from './../mocks/products.json';

type Props = {};

const Home = (props: Props) => {
	const [products] = useState(initialProducts);
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0,
	});
	const filterProducts = (products: IProduct[]) => {
		return products.filter((product) => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === 'all' || product.category === filters.category)
			);
		});
	};

	const filteredProducts = filterProducts(products);

	return <ProductList products={filteredProducts} />;
};

export default Home;
