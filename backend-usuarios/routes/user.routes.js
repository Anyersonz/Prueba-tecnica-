const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const validate = require('../middlewares/validate.middleware');
const UserController = require('../controllers/user.controller');

router.get('/data', UserController.getUsers);
router.get('/data/:id', UserController.getUser);
router.post(
    '/data',
    [
        body('nombre').isString().notEmpty(),
        body('correo').isEmail(),
        body('edad').isInt({ min: 0 }),
        validate,
    ],
    UserController.createUser
);
router.put(
    '/data/:id',
    [
        body('nombre').isString().notEmpty(),
        body('correo').isEmail(),
        body('edad').isInt({ min: 0 }),
        validate,
    ],
    UserController.updateUser
);
router.delete('/data/:id', UserController.deleteUser);

module.exports = router;