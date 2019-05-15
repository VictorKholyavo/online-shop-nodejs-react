const express = require("express");
const router = express.Router();

const controllers = require("../controllers");

const {
	auth,
	products,
	types,
	manufacturers
} = controllers;

const controllerHandler = (promise, params) => async (req, res, next) => {
	const boundParams = params ? params(req, res, next) : [];
	try {
		const result = await promise(...boundParams);
		return res.json(result || {message: "OK"});
	} catch (error) {
		return res.status(500) && next(error);
	}
};
const c = controllerHandler;

// AUTHENTICATION //
router.post("/signin", c(auth.signin, (req, res, next) => [req, res, next]));
router.post("/signup", c(auth.signup, (req, res, next) => [req, res, next]));

// PRODUCTS //
router.get("/products", c(products.getProducts, req => [req]));
router.post("/products", c(products.addProduct, req => [req.body]));

// TYPES & MANUFACTURERS //
router.get("/types", c(types.getTypes, req => [req]));
router.post("/types", c(types.addType, req => [req.body]));
router.get("/manufacturers", c(manufacturers.getManufacturers, req => [req]));
router.post("/manufacturers", c(manufacturers.addManufacturer, req => [req.body]));


module.exports = router;