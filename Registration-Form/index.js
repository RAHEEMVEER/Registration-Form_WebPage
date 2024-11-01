//? Registration Form Backend Code

document.addEventListener("DOMContentLoaded", function () {
  let gender = document.querySelectorAll(".gender");
  gender.forEach((gen) => {
    gen.addEventListener("click", () => {
      localStorage.setItem("gender", gen.value);
    });
  });

  const form = document.querySelector("#registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password1").value;

    if (phone.length === 11) {
      if (password === confirmPassword) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("password", password);

        window.location.href = "Registration-Detail/index1.html";
      } else {
        alert("The password you entered doesn't match the confirm password.");
      }
    } else {
      alert(
        "Please enter a valid phone number (11 digits including your country code)."
      );
    }
  });
});
// input place Holder

let inputs = document.querySelectorAll(".input");
let labels = document.querySelectorAll(".label");

inputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    labels[index].classList.add("activeLabel");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      labels[index].classList.remove("activeLabel");
    }
  });
});
