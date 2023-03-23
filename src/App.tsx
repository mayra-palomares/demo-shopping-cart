import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './layouts/Footer/Footer';
import Header from './layouts/Header/Header';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Header />
			<ToastContainer
				position="top-center"
				autoClose={1000}
				newestOnTop={true}
				closeOnClick
				hideProgressBar={true}
				limit={3}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<CartPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
