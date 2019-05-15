const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const cors = require("cors");
const path = require("path");

const routes = require("./server/routes");

app.use(cors());

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

mongoose.connect(`mongodb://localhost:27017/myapir`, function (err) {
  if (err) throw err;

  app.listen(3020, function () {
		console.log('API app started');
	})
});
