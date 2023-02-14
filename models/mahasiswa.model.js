const { DataTypes } = require("sequelize");
const { db } = require("../services/db");

const mahasiswa = db.define(
	"mahasiswa",
	{
		nama: DataTypes.STRING,
		email: DataTypes.STRING,
		nim: DataTypes.INTEGER(5),
	},
	{
		freezeTableName: true,
	}
);

module.exports = mahasiswa;
