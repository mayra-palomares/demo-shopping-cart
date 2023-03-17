interface ICartItem {
	productId: number;
	quantity: number;
	price: number;
}

class CartItem implements ICartItem {
	productId: number;
	quantity: number;
	price: number;

	constructor(productId: number, price: number) {
		this.productId = productId;
		this.price = price;
		this.quantity = 1;
	}
}

export default CartItem;
