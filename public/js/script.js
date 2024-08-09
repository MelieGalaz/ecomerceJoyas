// Inicializa EmailJS con tu User ID
emailjs.init("user_YOUR_USER_ID"); // Reemplaza con tu User ID real

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_j0la0z7", "template_gk0314h", this).then(
      function (response) {
        alert("Correo enviado con éxito!");
        console.log("Success:", response);
      },
      function (error) {
        alert("Error al enviar el correo.");
        console.log("Error:", error);
      }
    );
  });
