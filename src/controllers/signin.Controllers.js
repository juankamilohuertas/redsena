import pool from "../database/connection.js";
import { signinModels } from "../models/sign.models.js";

export const signinControllers = async (req, res) => {
  try {
    let nDocumentUsers = [];
    let pwrdDocumentUsers = [];

    const [usersRecords] = await pool.query(await signinModels());

    usersRecords.map((users) => {
      const validateDocument = users.id;
      const validateDocumentDb = validateDocument.split(".");
      nDocumentUsers.push(validateDocumentDb[1]);
    });
    usersRecords.map((users) => {
      const validatePasswordDb = users.password;
      pwrdDocumentUsers.push(validatePasswordDb);
    });

    if (!nDocumentUsers.includes(req.loginDetails.documentId)) {
      res.render("signin", { message: "Usuario no registrado" });
    } else if (!pwrdDocumentUsers.includes(req.loginDetails.password)) {
      res.render("signin", { message: "Contraseña invalida" });
    } else {
      res.redirect("/")
    }
  } catch (error) {
    console.log(error);
  }
};
