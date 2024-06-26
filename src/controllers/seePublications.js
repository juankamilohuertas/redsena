import pool from "../database/connection.js";

export const seePublications = async (req, res) => {
  let image = [];
  let titles = [];
  let messages = [];
  let files = [];
  let dates = [];

  // receive publications from data base
  try {
    const [publications] = await pool.query("SELECT * FROM publications");
    
    for (let i = 0; i < publications.length; i++) {
      image.push(publications[i].image);
      titles.push(publications[i].title);
      messages.push(publications[i].message);
      files.push(publications[i].file);
      dates.push(publications[i].date);
    }

    res.render("index", { message: "",image, titles, messages, files, dates});
    
  } catch (error) {
    console.error("Error al obtener las publicaciones:", error);
    res.status(500).send("Error interno del servidor");
  }
};
