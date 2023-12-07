const express = require("express");
const router = express.Router();

const { uploadImage } = require("../controllers/upload");

router.post("/upload", uploadImage);

module.exports = router;
