import pool from "../database/connection.js";
import { publicationsModels } from "../models/sign.models.js";
import { date } from "./utils/date.js";

export const publicationController = async (req, res) => {
  try {
    if (req.error != undefined) {
      res.status(404).send("Ha ocurrido un Error");
    } else {
      const { title, message, file, color } = req.infoPublication;
      
      // Obtener el id_user de la tabla users
      const [users] = await pool.query("SELECT id_user FROM users");
      
      const id_user = users[0].id_user; // Suponiendo que solo haya un usuario en la tabla
      
      
      console.log(users);
      
      await pool.query(
        await publicationsModels(
          0,
          id_user,
          title,
          message,
          "https://robohash.org/img",
          color,
          date
        )
      );
      res.redirect("/");
    }
  } catch (error) {
    console.log(error);
  }
};
