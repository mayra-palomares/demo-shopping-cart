import React, { useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import useFilters from '../hooks/useFilters';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';
import IProduct from '../types/Product';
import { products as initialProducts } from './../mocks/products.json';

const Home = () => {
	const [products] = useState(initialProducts);
	const [filterProducts] = useFilters();
	const filteredProducts: IProduct[] = filterProducts(products)!;

	return (
		<>
			<Header />
			<ProductList products={filteredProducts} />
			<Footer />
		</>
	);
};

export default Home;
