const mysql = require("mysql");
const Sequelize = require("sequelize");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
});

function createDB() {
	connection.query(`CREATE DATABASE IF NOT EXISTS Mahasiswa`, function (err, results) {
		console.log(results);
		console.log(err);
	});

	connection.end();
}

const db = new Sequelize("Mahasiswa", "root", "root", {
	host: "localhost",
	dialect: "mysql",
});

module.exports = { createDB, db };
