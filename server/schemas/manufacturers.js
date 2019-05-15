const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
	title: {
		type: String,
		required: true
	}
});

ManufacturerSchema.methods.toClient = function toClient() {
	const obj = this.toObject();

	obj.id = obj._id.toHexString();

	delete obj._id;
	return obj;
};

const Manufacturer = mongoose.model("Manufacturer", ManufacturerSchema);

module.exports = Manufacturer;