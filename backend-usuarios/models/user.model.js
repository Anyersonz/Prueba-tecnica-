const db = require('../helpers/db');

const getAllUsers = async () => {
    const result = await db.query('SELECT * FROM usuarios');
    return result.rows;
};

const getUserById = async (id) => {
    const result = await db.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0];
};

const createUser = async (nombre, correo, edad) => {
    const result = await db.query(
        'INSERT INTO usuarios (nombre, correo, edad) VALUES ($1, $2, $3) RETURNING *',
        [nombre, correo, edad]
    );
    return result.rows[0];
};

const updateUser = async (id, nombre, correo, edad) => {
    const result = await db.query(
        'UPDATE usuarios SET nombre = $1, correo = $2, edad = $3 WHERE id = $4 RETURNING *',
        [nombre, correo, edad, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    await db.query('DELETE FROM usuarios WHERE id = $1', [id]);
    return { message: 'Usuario eliminado' };
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};