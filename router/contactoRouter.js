// router/contactRouter.js
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send", (req, res) => {
  const { nombre, consulta, celular, correo } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "galazmely27@gmail.com",
      pass: "@ntiquina1",
    },
  });

  const mailOptions = {
    from: correo,
    to: "galazmely27@gmail.com",
    subject: "Consulta de cliente",
    text: `Nombre: ${nombre}\nConsulta: ${consulta}\nCelular: ${celular}\nCorreo: ${correo}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Mensaje enviado");
  });
});

module.exports = router;
