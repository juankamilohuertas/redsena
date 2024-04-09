import pool from "../database/connection.js";
import { signinModels } from "../models/sign.models.js";
import {TOKEN_USERS} from "../config.js";
import jwt from "jsonwebtoken"

export const signinControllers = async (req, res) => {
  try {
    let nDocumentUsers = [];
    let pwrdDocumentUsers = [];

    const [usersRecords] = await pool.query(await signinModels());
    usersRecords.map((users) => {
      nDocumentUsers.push(users.id_user);
    });
    usersRecords.map((users) => {
      pwrdDocumentUsers.push(users.password);
    });
   

    if (!nDocumentUsers.includes(parseInt(req.loginDetails.documentId))) {
      res.render("signin", { message: "Usuario no registrado" });
    } else if (!pwrdDocumentUsers.includes(req.loginDetails.password)) {
      res.render("signin", { message: "Contraseña invalida" });
    } else {
      const [idUsers] = await pool.query(`SELECT id_user FROM users`);

      await idUsers.map(idUsers=>{
        if([idUsers.id_user].includes(parseInt(req.loginDetails.documentId))){

          const token = jwt.sign(idUsers,TOKEN_USERS,{ expiresIn: '1h' })
          res.cookie("token",token)
          res.redirect("/")
        }
      })
      
      // res.redirect("/")

    }
  } catch (error) {
    console.log(error);
  }
};
