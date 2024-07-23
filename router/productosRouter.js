const router = require("express").Router();
const productosController = require("../controller/productosController");

// Ruta para la página de inicio (home)
router.get("/", productosController.home);

// Ruta para la página de productos
router.get("/productos", productosController.productos);
// Ruta para la página de contacto
router.get("/contacto", productosController.contacto);
module.exports = router;
