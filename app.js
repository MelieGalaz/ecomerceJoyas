const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const multer = require("multer");

// Configuración de method-override
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerProducto = require("./router/productosRouter.js");
const navRouter = require("./router/navRouter.js");

app.use("/productos", routerProducto);
app.use("/", navRouter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
