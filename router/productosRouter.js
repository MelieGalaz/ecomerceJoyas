const express = require("express");
const router = express.Router();
const productosController = require("../controller/productosController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", productosController.list);
router.get("/create", productosController.create);
router.post("/create", upload.single("imagen"), productosController.stock);
router.get("/:id/edit", productosController.edit);
router.put("/:id", upload.single("imagen"), productosController.update);
router.get("/:id/delete", productosController.delete);
router.delete("/:id", productosController.destroy);

module.exports = router;
