import CartItem from './CartItem';
import IProduct from './IProduct';

export enum CartStatus {
	CREATED,
	IN_PROGRESS,
	PLACED,
	COMPLETED,
}

interface ICart {
	items: Array<CartItem>;
	total: number;
	status: CartStatus;
	createdAt: Date;
	completedAt?: Date;
}

class Cart implements ICart {
	items: CartItem[];
	total: number;
	status: CartStatus;
	createdAt: Date;
	completedAt?: Date;

	constructor() {
		this.items = new Array<CartItem>();
		this.total = 0;
		this.status = CartStatus.CREATED;
		this.createdAt = new Date();
	}

	addToCart(product: IProduct) {
		const cartItem = new CartItem(product.id, product.price);
		this.items.push(cartItem);

		this.calculateTotal();
	}

	editCartItem(product: IProduct, quantity: number) {
		const index = this.items.findIndex((item) => item.productId === product.id);
		if (index !== -1) {
			const cartItem = { ...this.items[index], quantity };
			this.items.splice(index, 1, cartItem);
			this.calculateTotal();
		}
	}

	removeCartItem(product: IProduct) {
		const index = this.items.findIndex((item) => item.productId === product.id);
		if (index !== -1) {
			this.items.splice(index, 1);
			this.calculateTotal();
		}
	}

	clearCart() {
		this.items = [];
		this.total = 0;
	}

	private calculateTotal() {
		let total = 0;
		this.items.forEach((item) => {
			total += item.quantity * item.price;
		});
		this.total = total;
	}
}

export default Cart;
