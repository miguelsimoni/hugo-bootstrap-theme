function initValidatedForm() {
  var form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", sendEmail);
  }
}

async function sendEmail(e) {
  e.preventDefault();
  e.stopPropagation();

  var form = document.querySelector("form.needs-validation");
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return false;
  }

  document
    .querySelectorAll("button[type='submit'] > span")
    .forEach(function (item) {
      item.classList.toggle("visually-hidden");
    });
  
  var data = new FormData(e.target);
  fetch(e.target.action, {
    method: e.target.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      document.querySelector("section.form").classList.add("visually-hidden");
      if (response.ok) {
        document.querySelector("section.thanks").classList.remove("visually-hidden");
      } else {
        document.querySelector("section.error").classList.remove("visually-hidden");
      }
      form.reset();
    })
    .catch((error) => {
      document.querySelector("section.form").classList.add("visually-hidden");
      document.querySelector("section.error").classList.remove("visually-hidden");
    });
}

function setGRecaptchaRequired() {
  var gRecaptchaResponse = document.querySelector("#g-recaptcha-response");
  if (gRecaptchaResponse) {
    gRecaptchaResponse.required = true;
  }
}
