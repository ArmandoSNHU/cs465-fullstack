var express = require('express');
var router = express.Router();
var travelController = require('../controllers/travel');

// Link the route to the controller function
router.get('/', travelController.travel);

module.exports = router;
