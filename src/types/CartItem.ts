interface ICartItem {
	productId: number;
	name: string;
	quantity: number;
	price: number;
	imageUrl: string;
}

class CartItem implements ICartItem {
	productId: number;
	name: string;
	quantity: number;
	price: number;
	imageUrl: string;

	constructor(
		productId: number,
		name: string,
		price: number,
		imageUrl: string
	) {
		this.productId = productId;
		this.name = name;
		this.price = price;
		this.quantity = 1;
		this.imageUrl = imageUrl;
	}
}

export default CartItem;
