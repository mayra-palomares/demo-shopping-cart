import React, { createContext, ReactNode, useReducer } from 'react';
import CartReducer, {
	CartActionType,
	initialState,
} from '../reducers/CartReducer';
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
	const [state, dispatch] = useReducer(CartReducer, initialState);

	const addToCart = (product: IProduct) =>
		dispatch({ type: CartActionType.ADD_TO_CART, payload: { product } });

	const editCartItem = (productId: number, quantity: number) =>
		dispatch({
			type: CartActionType.EDIT_CART_ITEM,
			payload: { productId, quantity },
		});

	const removeCartItem = (productId: number) =>
		dispatch({ type: CartActionType.REMOVE_CART_ITEM, payload: { productId } });

	const clearCart = () => dispatch({ type: CartActionType.CLEAR_CART });

	return (
		<CartContext.Provider
			value={{
				cart: state.cart,
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
