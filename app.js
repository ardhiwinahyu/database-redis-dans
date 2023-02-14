const express = require("express");
const { createDB, db } = require("./services/db");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { client } = require("./controllers/artikel.controller");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

client.on("error", (err) => console.log("Redis Client Error", err));

(async () => {
	await client.connect();
})();

//database

//mysql
createDB();
db.sync();

//mongodb
mongoose
	.connect("mongodb://127.0.0.1:27017/artikel", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.catch((error) => {
		console.log("halo", error);
		return handleError(error);
	});

const mahasiswaRoute = require("./routes/mahasiswa.route");
const artikelRoute = require("./routes/artikel.route");

app.use("/mahasiswa", mahasiswaRoute);
app.use("/artikel", artikelRoute);

app.listen(3000, () => console.log("Start"));
