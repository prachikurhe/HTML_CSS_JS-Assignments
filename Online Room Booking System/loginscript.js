const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.pwd.value;

  if (email === "prachi@gmail.com" && password === "123") {
    alert("Successfully Logged In !!");
    successMsg.classList.remove("visually-hidden");
    errorMsg.classList.add("visually-hidden");
    location.replace("/");
  } else {
    successMsg.classList.add("visually-hidden");
    errorMsg.classList.remove("visually-hidden");
  }
});

//
