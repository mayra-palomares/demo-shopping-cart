import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
