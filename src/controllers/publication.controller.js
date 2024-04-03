import pool from "../database/connection.js";
import { publicationsModels } from "../models/sign.models.js";
import { date } from "./utils/date.js";

export const publicationController = async (req, res) => {
  try {
    if (req.error != undefined) {
      res.status(404).send("Ha ocurrido un Error");
    } else {
      const { title, message, file, color } = req.infoPublication;
      const [idPublication] = await pool.query(
        "SELECT idPublication FROM publications"
      );

      const [id] = await pool.query("SELECT id FROM users");

      await pool.query(
        await publicationsModels(
          idPublication.length,
          id[0].id,
          title,
          message,
          "https://robohash.org/img"+idPublication.length,
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

