const { createClient } = require("redis");
const Artikel = require("../models/artikel.model");

const client = createClient();
const EXPIRED_IN = 3600;

const getArtikel = async function (req, res) {
	try {
		let data = await client.get("artikel");
		let artikel;
		if (data) {
			return res.json(JSON.parse(data));
		} else {
			artikel = await Artikel.find();
			client.setEx("artikel", EXPIRED_IN, JSON.stringify(artikel));
			data = await client.get("artikel");
			return res.json(JSON.parse(data));
		}
	} catch (error) {
		console.log(error);
	}
};

const postArtikel = async function (req, res) {
	try {
		const newArtikel = new Artikel(req.body);
		const savedArtikel = await newArtikel.save();
		res.json(savedArtikel);
	} catch (error) {
		res.json({ message: "Error nig" });
		console.log(error);
	}
};

module.exports = {
	getArtikel,
	postArtikel,
	client,
};
