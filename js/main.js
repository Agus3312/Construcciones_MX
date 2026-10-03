// Cambiá este número (formato internacional, sin + ni espacios) por el WhatsApp real.
const whatsappNumber = "5490000000000";
const whatsappLink = (text) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

const whatsappButton = document.getElementById("wa");
const contactForm = document.getElementById("f");

whatsappButton.href = whatsappLink("Hola, quisiera pedir un presupuesto.");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("n").value;
  const phone = document.getElementById("t").value;
  const projectType = document.getElementById("o").value;
  const message = document.getElementById("m").value;
  const whatsappMessage = `Hola, soy ${name}. Tel: ${phone}. Consulta por: ${projectType}. ${message}`;

  window.open(whatsappLink(whatsappMessage), "_blank", "noopener");
});