var express = require('express');
var router = express.Router();

const HomeController = require('./../app/controllers/HomeController'),
      AboutController = require('./../app/controllers/AboutController'),
      FeedbackController = require('./../app/controllers/FeedbackController');

/* GET home page. */
router.get('/', HomeController);
router.get('/about', AboutController);
router.get('/feedback', FeedbackController);

module.exports = router;
