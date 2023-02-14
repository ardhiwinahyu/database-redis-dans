const express = require("express");
const router = express.Router();
const { getMahasiswa, getMahasiswaId, createMahasiswa, deleteMahasiswa, updateMahasiswa } = require("../controllers/mahasiswa.controller");

router.get("/", getMahasiswa);
router.get("/:id", getMahasiswaId);
router.post("/daftar", createMahasiswa);
router.delete("/:nim", deleteMahasiswa);
router.put("/:id", updateMahasiswa);

module.exports = router;
