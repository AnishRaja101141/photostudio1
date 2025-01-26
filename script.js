function sendToWhatsapp() {
  let number = "+91 6369266076";

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  var url =
    "https://wa.me/" +
    number +
    "?text=" +
    "Name :" +
    name +
    "%0a" +
    "Email :" +
    email +
    "%0a" +
    "Message :" +
    message +
    "%a%a";

  window.open(url, "_blank").focus();
}
