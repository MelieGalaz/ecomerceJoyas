const navController = {
  home: (req, res) => {
    res.render("home");
  },
  productos: (req, res) => {
    res.render("productos/productos");
  },
  contacto: (req, res) => {
    res.render("contacto/contacto");
  },
};

module.exports = navController;
