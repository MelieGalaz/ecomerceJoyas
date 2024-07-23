// const fs = require("fs");
// const path = require("path");

// const productosFilePath = path.join(__dirname, "../data/productos.json");
// const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

// const productosController = {
//   list: (req, res) => {
//     res.render("home", { productos });
//   },
// };

// module.exports = productosController;
const fs = require("fs");
const path = require("path");

const productosFilePath = path.join(__dirname, "../data/productos.json");
const productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

const productosController = {
  // Método para mostrar la página de inicio (home)
  home: (req, res) => {
    res.render("home", { productos });
  },

  // Método para mostrar la página de productos
  productos: (req, res) => {
    res.render("productos/productos", { productos });
  },
  contacto: (req, res) => {
    res.render("contacto/contacto");
  },
};

module.exports = productosController;
