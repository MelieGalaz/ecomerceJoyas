const fs = require("fs");
const path = require("path");

const productosFilePath = path.join(__dirname, "../data/productos.json");
let productos = JSON.parse(fs.readFileSync(productosFilePath, "utf-8"));

const productosController = {
  list: (req, res) => {
    res.render("productos/productos", { productos });
  },

  create: (req, res) => {
    res.render("productos/creacionProd");
  },

  stock: (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const imagen = req.file ? req.file.filename : null;

    const nuevoProducto = {
      // id: productos.length + 1,
      id:
        productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1,
      nombre,
      descripcion,
      precio,
      imagen,
    };

    try {
      productos.push(nuevoProducto);
      fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
      res.redirect("/productos");
    } catch (error) {
      console.log("Error al guardar el producto");
      console.error(error);
      res.status(500).send("Error al guardar el producto en el servidor");
    }
  },

  edit: (req, res) => {
    const id = Number(req.params.id);
    const producto = productos.find((producto) => producto.id === id);
    if (producto) {
      res.render("productos/editarProd", { producto });
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },
  update: (req, res) => {
    const id = req.params.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const nuevaImagen = req.file ? req.file.filename : null;

    const productoIndex = productos.findIndex((producto) => producto.id == id);
    if (productoIndex !== -1) {
      const producto = productos[productoIndex];

      const imagen = nuevaImagen || producto.imagen;

      productos[productoIndex] = {
        id: Number(id),
        nombre,
        descripcion,
        precio,
        imagen,
      };

      try {
        fs.writeFileSync(
          productosFilePath,
          JSON.stringify(productos, null, " ")
        );
        res.redirect("/productos");
      } catch (error) {
        console.log("Error al guardar el producto");
        console.error(error);
        res.status(500).send("Error al guardar el producto en el servidor");
      }
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },

  delete: (req, res) => {
    const id = req.params.id;
    const producto = productos.find((producto) => producto.id == id);
    if (producto) {
      res.render("productos/eliminarProd", { producto });
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },

  destroy: (req, res) => {
    const id = req.params.id;
    const productoIndex = productos.findIndex((producto) => producto.id == id);

    if (productoIndex !== -1) {
      const producto = productos[productoIndex];

      // Si el producto tiene una imagen, elimínala del servidor.
      if (producto.imagen) {
        const imagenPath = path.join(
          __dirname,
          "../public/img",
          producto.imagen
        );
        fs.unlink(imagenPath, (err) => {
          if (err) {
            console.error("Error al eliminar la imagen", err);
          }
        });
      }

      productos.splice(productoIndex, 1);

      try {
        fs.writeFileSync(
          productosFilePath,
          JSON.stringify(productos, null, " ")
        );
        res.redirect("/productos");
      } catch (error) {
        console.log("Error al guardar el producto");
        console.error(error);
        res.status(500).send("Error al guardar el producto en el servidor");
      }
    } else {
      res.status(404).send("Producto no encontrado");
    }
  },
};

module.exports = productosController;
