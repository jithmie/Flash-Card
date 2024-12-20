const express = require('express');
const flashController = require('../controllers/FlashController');

const router = express.Router();

router.route('/')
    // .get(flashController.findAll)
    .post(flashController.create);

/*router.route('/:id')
    .get(flashController.findById)*/;

router.route('/:id')
    .post(flashController.update);

router.route('/delete/:id')
    .post(flashController.deleteFlash);

module.exports = router;