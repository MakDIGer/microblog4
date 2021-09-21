var express = require('express');
var router = express.Router();

const MainController = require('./../app/controllers/MainController');

/* GET home page. */
router.get('/', MainController.home);
router.get('/about', MainController.about);
router.get('/feedback', MainController.feedback);

module.exports = router;
