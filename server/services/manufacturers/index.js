const Manufacturers = require("../../schemas/manufacturers");

function getManufacturersService() {
	const manufacturers = Manufacturers.find().then(manufacturersFromDB => {
		return manufacturersFromDB.map(manufacturer => manufacturer.toClient());
	});
	return (manufacturers);
}

function addManufacturerService(newManufacturerInfo) {
	const newManufacturer = new Manufacturers({
		title: newManufacturerInfo.title
	});
	return newManufacturer.save();
}

module.exports = {
	getManufacturersService,
	addManufacturerService
}