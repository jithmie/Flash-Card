const express = require('express');
const viewController = require("../controllers/ViewController");

const router = express.Router();

router.route('/')
    .get(viewController.index);

router.route('/login')
    .get(viewController.login);

router.route('/signup')
    .get(viewController.signup);

router.route('/dashboard')
    .get(viewController.dashboard);

router.route('/update/:id')
    .get(viewController.update);

module.exports = router;