function objToQueryString(obj) {
	const keyValuePairs = [];
	for (let i = 0; i < Object.keys(obj).length; i += 1) {
		keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
	}
	return keyValuePairs.join("&");
}

export default class CatalogService {
	constructor(domain) {
		this.domain = domain || "http://localhost:3020"; // API server domain
		this.fetch = this.fetch.bind(this); // React binding stuff
		this.getProducts = this.getProducts.bind(this);
	}

	getProducts(data) {
		return this.fetch(`${this.domain}/products?${objToQueryString(data)}`, {
			method: "GET"
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