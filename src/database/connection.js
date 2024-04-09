import mysql2 from "mysql2/promise";
import {
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_PORT,
} from "../config.js";


// Configurar el pool de conexiones a la base de datos
const pool =  mysql2.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});

// crear la base de datos si no existe
const createDatabaseIfNotExists = async () => {
  try {
    const result = await pool.query('CREATE DATABASE IF NOT EXISTS redsena');
    
    console.log('Base de datos creada correctamente.');
    return result;
  } catch (error) {
    console.error('Error al crear la base de datos:', error);
    throw error;
  }
};


createDatabaseIfNotExists();






// crear la tabla users si no existe
const createTableUsers = async () => {
  try {
    await pool.query("USE redsena")
    // Consulta SQL para crear una tabla llamada "users"
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id_user INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255),
        password VARCHAR(255),
        date VARCHAR(255)
      )
    `;
    // Ejecutar la consulta
    await pool.query(createTableQuery);
    console.log('Tabla users creada correctamente.');
  } catch (error) {
    console.error('Error al crear la tabla:', error);
    throw error;
  }
};

createTableUsers()
  .catch(error => {
    console.error('Error al crear la tabla:', error);
  });


  const createTablePublications = async () => {
    try {
      await pool.query("USE redsena")
      // Consulta SQL para crear una tabla llamada "publications"
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS publications (
          id_publication INT AUTO_INCREMENT PRIMARY KEY,
          id_user VARCHAR(255),
          title VARCHAR(255),
          message VARCHAR(255),
          file VARCHAR(255),
          color VARCHAR(255),
          date VARCHAR(255) 
        )
      `;
      // Ejecutar la consulta
      await pool.query(createTableQuery);
      console.log('Tabla publications creada correctamente.');
    } catch (error) {
      console.error('Error al crear la tabla:', error);
      throw error;
    }
  };
  
  createTablePublications()
    .catch(error => {
      console.error('Error al crear la tabla:', error);
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
