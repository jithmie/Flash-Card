const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.route('/signup').post(userController.signup);
router.route('/login').post(userController.login);

module.exports = router;
