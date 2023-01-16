const {Router} = require('express');
const controller = require('../controllers/scrapController');

const router = Router();

router.get('/lenovo', controller.get);

module.exports = router;