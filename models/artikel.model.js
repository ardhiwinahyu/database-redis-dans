const mongoose = require("mongoose");

const Artikel = mongoose.Schema({
	judul: {
		type: String,
		required: true,
	},

	isiArtikel: {
		type: String,
		required: true,
	},

	penulis: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Artikel", Artikel);
