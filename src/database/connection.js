import mysql2 from "mysql2/promise";
import {
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
} from "../config.js";

// Configurar el pool de conexiones a la base de datos
const pool = mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

// verificar la conexion
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("conexion exitosa");
    connection.release();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("pool.end()");
  }
})();

export default pool;
