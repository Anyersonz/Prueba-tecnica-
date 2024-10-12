require('dotenv').config();
const { Client } = require('pg');

// Crear la conexión a la base de datos PostgreSQL utilizando el Client de pg.
const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Crear la base de datos y la tabla.
const createDatabaseAndTable = async () => {
    try {
        await client.connect();

        // Crear la base de datos si no existe
        const dbName = "ler_prevencion";
        await client.query(`CREATE DATABASE ${dbName}`);

        console.log(`Base de datos ${dbName} creada exitosamente.`);

        // Conectar a la base de datos recién creada
        const dbClient = new Client({
            host: process.env.PG_HOST,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: dbName,
            port: process.env.PG_PORT,
        });

        await dbClient.connect();

        // Crear la tabla usuarios si no existe
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100),
                correo VARCHAR(100),
                edad INT
            );
        `;
        await dbClient.query(createTableQuery);
        console.log('Tabla usuarios creada exitosamente.');

        await dbClient.end();
    } catch (error) {
        console.error('Error creando la base de datos o la tabla:', error);
    } finally {
        await client.end();
    }
};

// Ejecutar la función para crear la base de datos y la tabla
createDatabaseAndTable();