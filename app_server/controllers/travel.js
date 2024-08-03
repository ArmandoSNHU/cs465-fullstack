// Use dynamic import for node-fetch to support ESM in Node.js
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// Define the API endpoint and options for the fetch request
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

/* GET travel view */
const travel = async (req, res, next) => {
    try {
        // Fetch data from the API endpoint
        const response = await fetch(tripsEndpoint, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const trips = await response.json(); // Parse the JSON response

        // Check if the trips data is an array and has items
        if (!Array.isArray(trips)) {
            throw new Error('Data format incorrect: Expected an array.');
        }
        if (trips.length === 0) {
            return res.status(404).render('travel', { title: 'Travlr Getaways', trips: [], message: 'No trips available.' });
        }

        // Render the travel page with the fetched trips data
        res.render('travel', { title: 'Travlr Getaways', trips });
    } catch (error) {
        console.error('Failed to fetch trips:', error);
        res.status(500).send('Server Error'); // Handle errors appropriately
    }
};

module.exports = {
    travel
};
