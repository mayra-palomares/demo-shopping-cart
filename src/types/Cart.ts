import CartItem from './CartItem';

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
}

export default Cart;
