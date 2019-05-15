const Type = require("../../schemas/types");

function getTypesService() {
	const types = Type.find().then(typesFromDB => {
		return typesFromDB.map(type => type.toClient());
	});
	return (types)
}

function addTypeService(newTypeInfo) {
	const newType = new Type({
		title: newTypeInfo.title
	});
	return newType.save();
}

module.exports = {
	getTypesService,
	addTypeService
}