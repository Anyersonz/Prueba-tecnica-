const UserService = require('../services/user.service');

const getUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await UserService.getUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
};

const createUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await UserService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario' });
    }
};

const deleteUser = async (req, res) => {
    try {
        await UserService.deleteUser(req.params.id);
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};