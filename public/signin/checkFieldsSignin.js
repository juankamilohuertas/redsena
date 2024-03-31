const formCheckBoxInput = document.getElementById("seePasswordIn");

formCheckBoxInput.checked = false;

const password = document.getElementById("password");

formCheckBoxInput.addEventListener("click", () => {
  if (formCheckBoxInput.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
