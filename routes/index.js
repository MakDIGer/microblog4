var express = require('express');
var router = express.Router();

const HomeController = require('./../app/controllers/HomeController'),
      AboutController = require('./../app/controllers/AboutController');

/* GET home page. */
router.get('/', HomeController);
router.get('/about', AboutController);

module.exports = router;
