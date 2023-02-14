const express = require("express");
const router = express.Router();
const { getArtikel, postArtikel } = require("../controllers/artikel.controller");

router.get("/", getArtikel);
router.post("/buat-artikel", postArtikel);

module.exports = router;
