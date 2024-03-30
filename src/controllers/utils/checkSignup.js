import { date } from "./date.js";

const checkSignup = async (req, res, next) => {
  try {
    const { initials, documentId, email, password1, password2 } = req.body;

    // regular expressions
    const id = /^(?![0\D])\d{10}$/;
    const exEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{10,18}$/;

    if (initials.length > 2) {
      return res.render("signup", {
        message: "Selecciona el tipo de documento",
      });
    } else if (!id.test(documentId)) {
      return res.render("signup", {
        message:
          "Ingresa un número de identificación de 10 dígitos numéricos sin espacios y ningún otro carácter",
      });
    } else if (!exEmail.test(email)) {
      return res.render("signup", {
        message:
          "Correo electrónico no valido",
      });
    } else if (!password.test(password1)) {
      if (password1 !== password2) {
        return res.render("signup", {
          message: "Las contraseñas no coinciden",
        });
      }
      return res.render("signup", {
        message:
          "La contraseña debe tener al menos una letra, un dígito y un carácter especial, y estar entre 10 a 18 caracteres y sin espacios",
      });
    } else {
      const validatedFields = {
        documentId: `${initials}.${documentId}`,
        email,
        password: password1,
        date,
      };
      req.validatedFields = validatedFields;
      next();
    }
  } catch (error) {
    next(error);
  }
};

export default checkSignup;
