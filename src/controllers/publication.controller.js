import pool from "../database/connection.js";
import { publicationsModels } from "../models/sign.models.js";
import { date } from "./utils/date.js";

export const publicationController = async (req, res) => {
  try {
    if (req.error != undefined) {
      res.status(404).send("Ha ocurrido un Error");
    } else {
      const { title, message, file, color } = req.infoPublication;
      const [id_publication] = await pool.query(
        "SELECT id_publication FROM publications"
      );

      const [id_user] = await pool.query("SELECT id_user FROM users");

  
      await pool.query(
        await publicationsModels(
          id_publication.length-1,
          id_user,
          title,
          message,
          "https://robohash.org/img"+id_publication.length,
          color,
          date
        )
      );
      res.redirect("/")
    }
  } catch (error) {
    console.log(error);
  }
};

