const {getProductsService, addProductsService} = require("../services").products;

function getProducts() {
	const products = getProductsService();
	return (products);
}

function addProduct(productInfo) {
	const newProduct = addProductsService(productInfo);
	return (newProduct);
}

module.exports = {
	getProducts,
	addProduct
};