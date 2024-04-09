import { date } from "./date.js";

const checkSignup = async (req, res, next) => {
  try {
    const { initials, documentId, email, password1, password2} =
      req.body;
    // regular expressions
    const id = /^(?![0\D])\d{6,10}$/;
    const exEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password = /^(?=.*[^a-zA-Z\d\s]).{8,}$/;

    if (initials.length > 2) {
      return res.render("signup", {
        message: "Selecciona el tipo de documento",
      });
    } else if (!id.test(documentId)) {
      return res.render("signup", {
        message:
          "Número de identificación min 6 y max 10 dígitos, sin espacios",
      });
    } else if (!exEmail.test(email)) {
      return res.render("signup", {
        message: "Correo electrónico no valido",
      });
    } else if (password1 === password2) {
      if (!password.test(password1)) {
        return res.render("signup", {
          message:
            "Contraseña mín 8 caracteres, sin espacios y un carácter especial",
        });
      } else {
        
        const validatedFields = {
          documentId: parseInt(documentId),
          email,
          password: password1,
          date,
        };
        req.validatedFields = validatedFields;
        next();
      }
    } else {
      return res.render("signup", {
        message: "Las contraseñas no coinciden",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default checkSignup;
