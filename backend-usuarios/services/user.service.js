const UserModel = require('../models/user.model');

const getUsers = async () => UserModel.getAllUsers();

const getUser = async (id) => UserModel.getUserById(id);

const createUser = async (userData) => {
    const { nombre, correo, edad } = userData;
    return UserModel.createUser(nombre, correo, edad);
};

const updateUser = async (id, userData) => {
    const { nombre, correo, edad } = userData;
    return UserModel.updateUser(id, nombre, correo, edad);
};

const deleteUser = async (id) => UserModel.deleteUser(id);

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};

