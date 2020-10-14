'use strict';

class Product {
	// title = 'DEFAULT';
	// imageUrl;
	// price;
	// description;

	constructor(title, image, price, desc) {
		this.title = title;
		this.imageUrl = image;
		this.price = price;
		this.description = desc;
	}
}

class ElementAttribute {
	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}
}

class Component {
	constructor(renderHookId, shouldRender = true) {
		this.hookId = renderHookId;
		if (shouldRender) {
			this.render();
		}
	}

	render() {}

	createRootElement(tag, cssClasses, attributes) {
		const rootEl = document.createElement(tag);
		if (cssClasses) {
			rootEl.className = cssClasses;
		}
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				rootEl.setAttribute(attr.name, attr.value);
			}
		}

		document.getElementById(this.hookId).append(rootEl);
		return rootEl;
	}
}

class ShoppingCart extends Component {
	items = [];

	set cartItems(value) {
		this.items = value;
		// console.log(this.items);
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
			2
		)}</h2>`;
	}

	get totalAmount() {
		const sum = this.items.reduce(
			(prevValue, curItem) => prevValue + curItem.price,
			0
		);
		return sum;
	}

	constructor(renderHookId) {
		super(renderHookId, false);
		this.orderProducts = () => {
			console.log('Ordering...');
			console.log(this.items);
		};
		this.render();
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	// orderProducts() {
	// 	console.log('Ordering...');
	// 	console.log(this.items);
	// }

	render() {
		const cartEl = this.createRootElement('section', 'cart');

		// const cartEl = document.createElement('section');
		// cartEl.className = 'cart';

		cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
		const orderButton = cartEl.querySelector('button');
		// orderButton.addEventListener('click', () => this.orderProducts());
		orderButton.addEventListener('click', this.orderProducts);
		this.totalOutput = cartEl.querySelector('h2');
		// return cartEl;
	}
}

class ProductItem extends Component {
	constructor(product, renderHookId) {
		super(renderHookId, false);
		this.product = product;
		this.render();
	}

	addToCart() {
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = this.createRootElement('li', 'product-item');

		// const prodEl = document.createElement('li');
		// prodEl.className = 'product-item';

		prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;

		const addCardButton = prodEl.querySelector('button');
		addCardButton.addEventListener('click', this.addToCart.bind(this));

		// return prodEl;
	}
}

class ProductList extends Component {
	#products = [];

	constructor(renderHookId) {
        super(renderHookId,false);
        this.render();
		this.fetchProducts();
	}

	fetchProducts() {
		this.#products = [
			new Product(
				'loperamide HCl',
				'http://dummyimage.com/230x173.jpg/5fa2dd/ffffff',
				57.14,
				'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.'
			),
			new Product(
				'Treatment Set TS351313',
				'http://dummyimage.com/163x185.bmp/cc0000/ffffff',
				31.54,
				'Nam dui.'
			),
			new Product(
				'docusate sodium',
				'http://dummyimage.com/235x127.png/ff4444/ffffff',
				45.78,
				'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.'
			),
			new Product(
				'HOMOSALATE, OCTISALATE, AVOBENZONE, OCTOCRYLENE',
				'http://dummyimage.com/145x138.bmp/dddddd/000000',
				38.89,
				'Ut tellus.'
			),
			new Product(
				'Menthol and Camphor (Synthetic)',
				'http://dummyimage.com/203x225.png/5fa2dd/ffffff',
				51.04,
				'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.'
			),
			new Product(
				'DILTIAZEM HYDROCHLORIDE',
				'http://dummyimage.com/212x163.bmp/dddddd/000000',
				67.25,
				'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.'
			),
			new Product(
				'Lisinopril',
				'http://dummyimage.com/125x155.png/ff4444/ffffff',
				32.56,
				'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.'
			),
			new Product(
				'Capsaicin',
				'http://dummyimage.com/225x190.jpg/cc0000/ffffff',
				24.54,
				'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
			),
			new Product(
				'Acetaminophen',
				'http://dummyimage.com/138x244.bmp/cc0000/ffffff',
				74.32,
				'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.'
			),
			new Product(
				'Sodium Fluoride',
				'http://dummyimage.com/111x189.jpg/ff4444/ffffff',
				45.3,
				'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.'
			),
		];
		this.renderProducts();
	}

	renderProducts() {
		for (const prod of this.#products) {
			new ProductItem(prod, 'prod-list');
		}
	}

	render() {
		this.createRootElement('ul', 'product-list', [
			new ElementAttribute('id', 'prod-list'),
		]);
		// const prodList = document.createElement('ul');
		// prodList.id = 'prod-list';
		// prodList.className = 'product-list';

		if (this.#products && this.#products.length > 0) {
			this.renderProducts();
		}

		// return prodList;
	}
}

class Shop extends Component {
	constructor() {
        super();
        // this.render();
	}

	render() {
		// const renderHook = document.getElementById('app');

		this.cart = new ShoppingCart('app');
        const productsList = new ProductList('app');
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
