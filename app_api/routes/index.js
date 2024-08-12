const express = require('express'); 
const router = express.Router();   // Router logic

// Import the controllers to route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)     // GET Method routes tripList
    .post(tripsController.tripsAddTrip); // POST Method adds a Trip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);   // method constructed to call when it receives put request

module.exports = router;
