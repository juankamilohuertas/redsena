import pool from "../database/connection.js";
import { signupModels } from "../models/sign.models.js";

export const signupControllers = async (req, res) => {
  try {
    const { documentId, email, password, date } = req.validatedFields;
    const userData = await signupModels(documentId, email, password, date);

    await pool.query(userData);

    res.render("signin");

    pool.destroy();
  } catch (error) {
    res.render("signup", { message: "El usuario ya esta registrado" });
    console.log(error);
  }
};

export default signupControllers;
