var express = require('express');
var router = express.Router();

const MainController = require('./../app/controllers/MainController');

/* GET home page. */
router.get('/', MainController);

module.exports = router;
