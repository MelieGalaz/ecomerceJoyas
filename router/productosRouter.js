const express = require("express");
const router = express.Router();
const productosController = require("../controller/productosController");

router.get("/", productosController.list);

module.exports = router;
