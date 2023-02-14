const Mahasiswa = require("../models/mahasiswa.model");

const getMahasiswa = async (req, res) => {
	try {
		const data = await Mahasiswa.findAll({
			attributes: ["nama", "email", "nim"],
		});

		console.log("ini data:", data);

		res.send(data);
	} catch (error) {
		console.log(error);
	}
};

const getMahasiswaId = async (req, res) => {
	try {
		const data = await Mahasiswa.findOne({
			attributes: ["nama", "email", "nim"],
			where: {
				id: req.params.id,
			},
		});

		if (!data) {
			return res.json({ message: "Data tidak ada" });
		}

		res.json(data);
	} catch (error) {
		console.log(error);
	}
};

const createMahasiswa = async (req, res) => {
	try {
		await Mahasiswa.create(req.body);
		console.log("request body : ", req.body);
		res.json({
			message: "Mahasiswa berhasil Terdaftar",
		});
	} catch (error) {
		console.log(error);
	}
};

const deleteMahasiswa = async (req, res) => {
	try {
		const data = await Mahasiswa.destroy({
			where: {
				nim: req.params.nim,
			},
		});

		if (!data) {
			return res.json({
				message: `Mahasiswa dengan nim ${req.params.nim} tidak terdaftar`,
			});
		}
		res.json({
			message: "Mahasiswa berhasil Terhapus",
		});
	} catch (error) {
		console.log(error);
	}
};

const updateMahasiswa = async (req, res) => {
	try {
		const data = await Mahasiswa.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (!data) {
			return res.json({ message: "Data tidak ada" });
		}

		res.json(data);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getMahasiswa,
	getMahasiswaId,
	deleteMahasiswa,
	updateMahasiswa,
	createMahasiswa,
};
