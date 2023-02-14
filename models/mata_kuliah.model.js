const { DataTypes } = require("sequelize");
const { db } = require("../services/db");

const mata_kuliah = db.define(
	"mata_kuliah",
	{
		kode_mk: DataTypes.INTEGER(5),
		nama_mk: DataTypes.STRING,
	},
	{
		freezeTableName: true,
	}
);

module.exports = mata_kuliah;
