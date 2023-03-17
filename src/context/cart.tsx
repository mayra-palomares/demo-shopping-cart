import React, { createContext, ReactNode, useState } from 'react';
import Cart from '../types/Cart';
import IProduct from '../types/IProduct';

type CartContent = {
	cart: Cart;
	addToCart: (product: IProduct) => void;
	editCartItem: (product: number, quantity: number) => void;
	removeCartItem: (product: number) => void;
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

	const editCartItem = (productId: number, quantity: number) => {
		cart.editCartItem(productId, quantity);
		setCart(cart);
	};

	const removeCartItem = (productId: number) => {
		cart.removeCartItem(productId);
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
