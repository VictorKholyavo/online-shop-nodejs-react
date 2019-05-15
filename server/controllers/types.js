const {getTypesService, addTypeService} = require("../services/types");

function getTypes() {
	const types = getTypesService();
	return (types);
}

function addType(newTypeInfo) {
	const newType = addTypeService(newTypeInfo);
	return (newType);
}

module.exports = {
	getTypes,
	addType
};
