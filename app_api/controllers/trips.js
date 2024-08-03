const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find({}).exec();
        
        if (!trips || trips.length === 0) {
            // Database returned no data
            return res.status(404).json({ message: 'No trips found' });
        } else {
            // Return resulting trip list
            return res.status(200).json(trips);
        }
    } catch (err) {
        console.error('Error fetching trips:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// GET: /trips/:tripCode - lists a single trip
// Finds a trip based on the 'code' parameter
const tripsFindByCode = async (req, res) => {
    try {
        console.log('Received tripCode:', req.params.tripCode); // Debugging log
        const trip = await Model.findOne({ 'code': req.params.tripCode }).exec();
        
        if (!trip) {
            // Database returned no data
            console.log('Trip not found for code:', req.params.tripCode); // Debugging log
            return res.status(404).json({ message: 'Trip not found' });
        } else {
            // Return the specific trip
            console.log('Trip found:', trip); // Debugging log
            return res.status(200).json(trip);
        }
    } catch (err) {
        console.error('Error finding trip by code:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
