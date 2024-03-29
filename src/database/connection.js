import mysql2 from "mysql2/promise";

// Configurar el pool de conexiones a la base de datos
const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "myapp",
  /* waitForConnections: true, */
  /* connectionLimit: 10,*/ // Límite de conexiones en el pool
  /* queueLimit: 0 */ // Sin límite en la cola de espera
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
    pool.end();
    console.log("si o si")
  }
})();

