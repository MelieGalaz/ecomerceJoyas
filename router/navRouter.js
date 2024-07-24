const express = require("express");
const router = express.Router();
const navController = require("../controller/navController");

router.get("/", navController.home);

router.get("/productos", navController.productos);

router.get("/contacto", navController.contacto);

module.exports = router;
