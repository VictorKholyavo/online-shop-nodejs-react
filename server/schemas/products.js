const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	type: {
		type: Schema.Types.ObjectId,
		ref: "Type",
		required: true
	},
	manufacturer: {
		type: Schema.Types.ObjectId,
		ref: "Manufacturer",
		required: true
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		default: 0
	},
	// image: {
	// 	type: String,
	// }
});

ProductSchema.methods.toClient = function toClient() {
	const obj = this.toObject();
	// // Rename fields:
	obj.id = obj._id.toHexString();
	obj.type.id = obj.type._id;
	obj.manufacturer.id = obj.manufacturer._id;
	delete obj.type._id;
	delete obj.manufacturer._id;
	delete obj._id;
	return obj;
};

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;