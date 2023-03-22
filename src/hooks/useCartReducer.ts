import { useReducer } from 'react';
import CartReducer, {
	CartActionType,
	initialState,
} from '../reducers/CartReducer';
import IProduct from '../types/IProduct';

const useCartReducer = () => {
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

	return {
		cart: state.cart,
		addToCart,
		editCartItem,
		removeCartItem,
		clearCart,
	};
};

export default useCartReducer;
