import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FiltersProvider } from './context/filters';
import './index.css';
import { CartProvider } from './context/cart';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<FiltersProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</FiltersProvider>
	</BrowserRouter>
);
