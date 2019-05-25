export default class FormProductService {
	constructor(domain) {
		this.domain = domain || "http://localhost:3020"; // API server domain
		this.fetch = this.fetch.bind(this); // React binding stuff
		this.addType = this.addType.bind(this);
		this.addManufacturer = this.addManufacturer.bind(this);
		this.getTypes = this.getTypes.bind(this);
	}

	addType(title) {
		return this.fetch(`${this.domain}/types`, {
			method: "POST",
			body: JSON.stringify({
				title
			})
		}).then(res => Promise.resolve(res));
	}

	addManufacturer(title) {
		return this.fetch(`${this.domain}/manufacturers`, {
			method: "POST",
			body: JSON.stringify({
				title
			})
		}).then(res => Promise.resolve(res));
	}

	getTypes() {
		return this.fetch(`${this.domain}/types`, {
			method: "GET"
		}).then(res => Promise.resolve(res));
	}

	getManufacturers() {
		return this.fetch(`${this.domain}/manufacturers`, {
			method: "GET"
		}).then(res => Promise.resolve(res));
	}

	addProduct(productInfo) {
		return this.fetch(`${this.domain}/products`, {
			method: "POST",
			body: JSON.stringify({
				productInfo
			})
		}).then(res => Promise.resolve(res));
	}

	fetch(url, options) {
		const headers = {
			"Accept": "application/json",
			"Content-Type": "application/json"
		};
		return fetch(url, {
			headers,
			...options
		})
			.then(response => response.json());
	}
}