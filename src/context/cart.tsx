import React, { createContext, ReactNode } from 'react';
import useCartReducer from '../hooks/useCartReducer';
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
	const { cart, addToCart, editCartItem, removeCartItem, clearCart } =
		useCartReducer();

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				editCartItem,
				removeCartItem,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
