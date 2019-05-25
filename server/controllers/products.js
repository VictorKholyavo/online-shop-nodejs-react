const {getProductsService, addProductsService} = require("../services").products;

function getProducts(req) {
	const products = getProductsService(req.query.offset, req.query.limit);
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