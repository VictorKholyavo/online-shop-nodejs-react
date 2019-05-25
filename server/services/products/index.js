const Product = require("../../schemas/products");

function getProductsService(start, count) {
	return new Promise(async (resolve) => {
		let data = [];
		if (start) {
			data = await Product.find().populate(["type", "manufacturer"]).skip(+start).limit(+count).then(productsFromDB => {
				return productsFromDB.map(product => product.toClient());
			})
		}
		Product.count().exec((err, total_count) => {
			return resolve({
				"pos": +start,
				"data": data,
				"total_count": total_count
			})
		})
	})

	// const products = Product.find().populate(["type", "manufacturer"]).then(productsFromDB => {
	// 	return productsFromDB.map(product => product.toClient());
	// });
	// return (products);
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