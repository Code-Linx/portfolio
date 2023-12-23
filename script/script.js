function sendMail() {
  (function name() {
    emailjs.init("7meBuIBJmfkyc0kVd"); // Account public keys
  })();

  var params = {
    sendername: document.querySelector("#sendername").value,
    replyto: document.querySelector("#replyto").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_73vpgpt"; //email service id
  var templateID = "template_2rlfr6j"; //email template id

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Sent Successfully!");
    })

    .catch();
}
