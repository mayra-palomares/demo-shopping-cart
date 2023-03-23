import Cart from '../types/Cart';
import CartItem from '../types/CartItem';
import IProduct from '../types/IProduct';
import {
	getLocalStorageItem,
	setLocalStorageItem,
} from '../utils/localStorage';

const CART = 'cart';

type CartState = {
	cart: Cart;
};

export enum CartActionType {
	ADD_TO_CART,
	EDIT_CART_ITEM,
	REMOVE_CART_ITEM,
	CLEAR_CART,
}

type CartActionPayload = {
	product?: IProduct;
	productId?: number;
	quantity?: number;
};

type CartAction = {
	type: CartActionType;
	payload?: CartActionPayload;
};

const calculateTotal = (cart: Cart) => {
	let total = 0;
	cart.items.forEach((item) => {
		total += item.quantity * item.price;
	});
	return total;
};

export const initialState: CartState = {
	cart: getLocalStorageItem<Cart>(CART, new Cart()),
};

const updateLocalStorage = (cart: Cart): void => {
	setLocalStorageItem<Cart>(CART, cart);
};

const CartReducer = (state: CartState, action: CartAction) => {
	const { type, payload = {} } = action;
	const { product, productId, quantity } = payload;
	const { cart } = state;
	let index: number;

	switch (type) {
	case CartActionType.ADD_TO_CART:
		if (product) {
			const { id, title, price, thumbnail } = product;
			index = cart.items.findIndex((item) => item.productId === product?.id);
			if (index === -1) {
				// if not found
				const cartItem = new CartItem(id, title, price, thumbnail);
				cart.items.push(cartItem);
				cart.total = calculateTotal(cart);
			} else {
				cart.items[index].quantity += 1;
				cart.total = calculateTotal(cart);
			}
		}
		updateLocalStorage(cart);
		return { cart: { ...cart } };
	case CartActionType.EDIT_CART_ITEM:
		if (quantity) {
			index = cart.items.findIndex((item) => item.productId === productId);
			if (index !== -1) {
				cart.items[index].quantity = quantity;
				cart.total = calculateTotal(cart);
			}
		}
		updateLocalStorage(cart);
		return { cart: { ...cart } };
	case CartActionType.REMOVE_CART_ITEM:
		index = cart.items.findIndex(
			(item) => item.productId === payload?.productId
		);
		if (index !== -1) {
			cart.items.splice(index, 1);
			cart.total = calculateTotal(cart);
		}
		updateLocalStorage(cart);
		return { cart: { ...cart } };
	case CartActionType.CLEAR_CART:
		cart.items = [];
		cart.total = 0;
		updateLocalStorage(cart);
		return { cart: { ...cart } };
	}

	return state;
};

export default CartReducer;
