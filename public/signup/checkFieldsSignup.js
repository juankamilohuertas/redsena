const formCheckBoxInput = document.getElementById("seePasswordup");

const btnRegistrarse = document.getElementById("btnRecord");

formCheckBoxInput.checked = false;

class Checksignup {
  constructor(initials, documentId, email, password1, password2, messageError) {
    this.initials = initials;
    this.document = documentId;
    this.email = email;
    this.password1 = password1;
    this.password2 = password2;
    this.messageError = messageError;
  }
  checkFields(e) {
    let prevent;
    try {
      // regular expressions
      const id = /^(?![0\D])\d{6,10}$/;
      const exEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const password = /^(?=.*[^a-zA-Z\d\s]).{8,}$/;

      if (this.initials.value.length > 2) {
        throw {
          messageError: "Selecciona el tipo de documento",
          element: this.initials,
        };
      } else if (!id.test(this.document.value)) {
        throw {
          messageError:
            "Número de identificación min 6 y max 10 dígitos, sin espacios",
          element: this.document,
        };
      } else if (!exEmail.test(this.email.value)) {
        throw {
          messageError: "Correo electrónico no valido",
          element: this.email,
        };
      } else if (this.password1.value === this.password2.value) {
        if (!password.test(this.password1.value)) {
          throw {
            messageError:
              "Contraseña mín 8 caracteres, sin espacios y un carácter especial",
            element: this.password1,
          };
        } else {
          prevent = false;
        }
      } else {
        throw {
          messageError: "Las contraseñas no coinciden",
          element: this.password1,
        };
      }
    } catch (error) {
      if (error.element.nextElementSibling === null) {
        error.element.classList.add("border", "border-danger");
        error.element.parentElement.innerHTML += `<p id="conteMessageError" class="m-0 fs-6 fw-light">${error.messageError}</p>`;
        // remove massge error
        setTimeout(() => {
          document.getElementById("conteMessageError").remove();
        }, 5000);
      }
      prevent = e.preventDefault();
    }
  }
}

btnRegistrarse.addEventListener("click", (e) => {
  const fields = new Checksignup(
    document.getElementById("initials"),
    document.getElementById("documentId"),
    document.getElementById("email"),
    document.getElementById("password1"),
    document.getElementById("password2")
  );
  fields.checkFields(e);
});

class SeePassword extends Checksignup {
  constructor(initials, documentId, email, password1, password2, messageError) {
    super(initials, documentId, email, password1, password2, messageError);
  }
  checkbox() {
    if (formCheckBoxInput.checked) {
      password1.type = "text";
      password2.type = "text";
    } else {
      password1.type = "password";
      password2.type = "password";
    }
  }
}

formCheckBoxInput.addEventListener("click", () => {
  const seePassword = new SeePassword();
  seePassword.checkbox();
});
