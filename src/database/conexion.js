import mysql2 from "mysql2/promise";

// Configurar el pool de conexiones a la base de datos
const pool = mysql2.createPool({
  /* connectionLimit: 10, */ // Número máximo de conexiones en el pool
  host: "localhost",
  user: "root",
  password: "",
  database: "myapp",
});

// Obtener una conexión del pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error al obtener la conexión del pool:", err);
    return;
  }
  console.log("conexion exitosa");
});
