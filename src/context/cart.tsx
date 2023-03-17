import React, { createContext, ReactNode, useState } from 'react';
import Cart from '../types/Cart';
import IProduct from '../types/IProduct';

type CartContent = {
	cart: Cart;
	addToCart: (product: IProduct) => void;
	editCartItem: (product: IProduct, quantity: number) => void;
	removeCartItem: (product: IProduct) => void;
	clearCart: () => void;
};
export const CartContext = createContext({} as CartContent);

type Props = {
	children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
	const [cart, setCart] = useState(new Cart());

	const addToCart = (product: IProduct) => {
		cart.addToCart(product);
		setCart(cart);
	};

	const editCartItem = (product: IProduct, quantity: number) => {
		cart.editCartItem(product, quantity);
		setCart(cart);
	};

	const removeCartItem = (product: IProduct) => {
		cart.removeCartItem(product);
		setCart(cart);
	};

	const clearCart = () => {
		cart.clearCart();
		setCart(cart);
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, editCartItem, removeCartItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
