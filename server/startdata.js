const express = require("express");
const router = express.Router();

const Products = require("./schemas/products");
const Types = require("./schemas/types");
const Manufacturers = require("./schemas/manufacturers");

const typesStartData = [
	{"id": "5ce4481ffc13ae7a7d000000", "title": "Notebook"},
	{"id": "5ce4481ffc13ae7a7d000001", "title": "Phone"},
	{"id": "5ce4481ffc13ae7a7d000002", "title": "TV"},
	{"id": "5ce4481ffc13ae7a7d000003", "title": "Watch"}
];

const ManufacturersStartData = [
	{"id": "5ce44906fc13ae3d6c000000", "title": "Apple"},
	{"id": "5ce44906fc13ae3d6c000001", "title": "Samsung"},
	{"id": "5ce44906fc13ae3d6c000002", "title": "Huawei"},
	{"id": "5ce44906fc13ae3d6c000003", "title": "Xiaomi"}
];

const ProductsStartData = [
	{"id": "5ce44c6cfc13ae77cd000006", "name": "Sonair", "price": 1464, "type": "5ce4481ffc13ae7a7d000000", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000007", "name": "Pannier", "price": 1548, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000003"},
	{"id": "5ce44c6cfc13ae77cd000008", "name": "Bigtax", "price": 539, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000009", "name": "Ronstring", "price": 1425, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000003"},
	{"id": "5ce44c6cfc13ae77cd00000a", "name": "Lotlux", "price": 970, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd00000b", "name": "Stronghold", "price": 1194, "type": "5ce4481ffc13ae7a7d000000", "manufacturer": "5ce44906fc13ae3d6c000000"},
	{"id": "5ce44c6cfc13ae77cd00000c", "name": "Asoka", "price": 1618, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000001"},
	{"id": "5ce44c6cfc13ae77cd00000d", "name": "Wrapsafe", "price": 1380, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000003"},
	{"id": "5ce44c6cfc13ae77cd00000e", "name": "Home Ing", "price": 1005, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd00000f", "name": "Lotstring", "price": 1115, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000000"},
	{"id": "5ce44c6cfc13ae77cd000010", "name": "Tempsoft", "price": 975, "type": "5ce4481ffc13ae7a7d000002", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000011", "name": "Flowdesk", "price": 1702, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000003"},
	{"id": "5ce44c6cfc13ae77cd000012", "name": "Zoolab", "price": 1682, "type": "5ce4481ffc13ae7a7d000002", "manufacturer": "5ce44906fc13ae3d6c000000"},
	{"id": "5ce44c6cfc13ae77cd000013", "name": "Konklab", "price": 837, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000014", "name": "Job", "price": 503, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000015", "name": "Zoolab", "price": 889, "type": "5ce4481ffc13ae7a7d000002", "manufacturer": "5ce44906fc13ae3d6c000000"},
	{"id": "5ce44c6cfc13ae77cd000016", "name": "Lotstring", "price": 1705, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000000"},
	{"id": "5ce44c6cfc13ae77cd000017", "name": "Span", "price": 1452, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000000"},
	{"id": "5ce44c6cfc13ae77cd000018", "name": "Subin", "price": 746, "type": "5ce4481ffc13ae7a7d000000", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000019", "name": "Temp", "price": 1247, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000001"},
	{"id": "5ce44c6cfc13ae77cd00001a", "name": "Flexidy", "price": 1370, "type": "5ce4481ffc13ae7a7d000000", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd00001b", "name": "Zathin", "price": 1919, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000001"},
	{"id": "5ce44c6cfc13ae77cd00001c", "name": "Tin", "price": 699, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000003"},
	{"id": "5ce44c6cfc13ae77cd00001d", "name": "Vagram", "price": 1917, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000003"},
	{"id": "5ce44c6cfc13ae77cd00001e", "name": "Wrapsafe", "price": 1326, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd00001f", "name": "Tampflex", "price": 1203, "type": "5ce4481ffc13ae7a7d000003", "manufacturer": "5ce44906fc13ae3d6c000001"},
	{"id": "5ce44c6cfc13ae77cd000020", "name": "Greenlam", "price": 836, "type": "5ce4481ffc13ae7a7d000002", "manufacturer": "5ce44906fc13ae3d6c000001"},
	{"id": "5ce44c6cfc13ae77cd000021", "name": "Latlux", "price": 1593, "type": "5ce4481ffc13ae7a7d000001", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000022", "name": "Y-Solowarm", "price": 1566, "type": "5ce4481ffc13ae7a7d000000", "manufacturer": "5ce44906fc13ae3d6c000002"},
	{"id": "5ce44c6cfc13ae77cd000023", "name": "Y-Solowarm", "price": 1777, "type": "5ce4481ffc13ae7a7d000000", "manufacturer": "5ce44906fc13ae3d6c000001"}
];

router.get("/", async (req, res) => {
	typesStartData.map(type => {
		let newType = new Types({
			_id: type.id,
			title: type.title
		});
		newType.save();
	});
	ManufacturersStartData.map(manufacturer => {
		let newManufacturer = new Manufacturers({
			_id: manufacturer.id,
			title: manufacturer.title
		});
		newManufacturer.save();
	});
	ProductsStartData.map(product => {
		let newProduct = new Products({
			_id: product.id,
			name: product.name,
			price: product.price,
			type: product.type,
			manufacturer: product.manufacturer
		});
		newProduct.save();
	});

	res.send("Start data added!");
});

module.exports = router;