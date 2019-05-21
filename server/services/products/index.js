const Product = require("../../schemas/products");

function getProductsService() {
	const products = Product.find().populate(["type", "manufacturer"]).then(productsFromDB => {
		return productsFromDB.map(product => product.toClient());
	});
	return (products);
}

function addProductsService(productInfo) {
	let newProduct = new Product({
		name: productInfo.productInfo.productName,
		price: productInfo.productInfo.productPrice,
		type: productInfo.productInfo.productType,
		manufacturer: productInfo.productInfo.productManufacturer
	});
	return newProduct.save();
}

module.exports = {
	getProductsService,
	addProductsService
};