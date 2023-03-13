import React, { useState } from 'react';
import Filters from '../components/Filters/Filters';
import ProductList from '../components/ProductList/ProductList';
import useFilters from '../hooks/useFilters';
import IProduct from '../types/Product';
import { products as initialProducts } from './../mocks/products.json';

const Home = () => {
	const [products] = useState(initialProducts);
	const { filterProducts } = useFilters();
	const filteredProducts: IProduct[] = filterProducts(products);

	return (
		<>
			<Filters />
			<ProductList products={filteredProducts} />
		</>
	);
};

export default Home;
