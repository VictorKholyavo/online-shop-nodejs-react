const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypeSchema = new Schema({
	title: {
		type: String,
		required: true
	}
});

TypeSchema.methods.toClient = function toClient() {
	const obj = this.toObject();

	obj.id = obj._id.toHexString();
	delete obj._id;
	return obj;
};

const Type = mongoose.model("Type", TypeSchema);

module.exports = Type;