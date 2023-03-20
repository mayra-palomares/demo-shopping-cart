import React, { createContext, ReactNode, useState } from 'react';
import Cart from '../types/Cart';
import CartItem from '../types/CartItem';
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
	const [cart, setCart] = useState<Cart>(new Cart());

	const addToCart = (product: IProduct) => {
		const index = cart.items.findIndex((item) => item.productId === product.id);
		if (index === -1) {
			// if not found
			const cartItem = new CartItem(
				product.id,
				product.title,
				product.price,
				product.thumbnail
			);
			cart.items.push(cartItem);
			cart.total = calculateTotal(cart);
		} else {
			cart.items[index].quantity += 1;
			cart.total = calculateTotal(cart);
		}

		setCart({ ...cart } as Cart);
	};

	const editCartItem = (productId: number, quantity: number) => {
		const index = cart.items.findIndex((item) => item.productId === productId);
		if (index !== -1) {
			cart.items[index].quantity = quantity;
			cart.total = calculateTotal(cart);
		}

		setCart({ ...cart } as Cart);
	};

	const removeCartItem = (productId: number) => {
		const index = cart.items.findIndex((item) => item.productId === productId);
		if (index !== -1) {
			cart.items.splice(index, 1);
			cart.total = calculateTotal(cart);
		}

		setCart({ ...cart } as Cart);
	};

	const clearCart = () => {
		cart.items = [];
		cart.total = 0;

		setCart({ ...cart } as Cart);
	};

	const calculateTotal = (cart: Cart) => {
		let total = 0;
		cart.items.forEach((item) => {
			total += item.quantity * item.price;
		});
		return total;
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, editCartItem, removeCartItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
