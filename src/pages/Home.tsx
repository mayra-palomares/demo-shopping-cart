import React from 'react';
import { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import Header from '../layouts/Header/Header';
import IProduct from '../types/Product';
import { products as initialProducts } from './../mocks/products.json';

const Home = () => {
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

	return (
		<>
			<Header />
			<ProductList products={filteredProducts} />
		</>
	);
};

export default Home;
