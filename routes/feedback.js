var express = require('express');
var router = express.Router();

const FeedBackController = require('./../app/controllers/FeedBackController');

router.get('/', FeedBackController.show);

module.exports = router;
