const {getManufacturersService, addManufacturerService} = require("../services/manufacturers");

function getManufacturers() {
	const manufacturers = getManufacturersService();
	return (manufacturers);
}

function addManufacturer(newManufacturerInfo) {
	console.log(newManufacturerInfo);
	const newManufacturer = addManufacturerService(newManufacturerInfo);
	return (newManufacturer);
}

module.exports = {
	getManufacturers,
	addManufacturer
};
