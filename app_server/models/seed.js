// Bring in the DB connection and the Trip schema
const mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('C:/Users/arman/travlr/data/trips.json', 'utf8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close the MongoDB connection and exit
seedDB().then(async () => {
    await mongoose.connection.close();
    process.exit(0);
}).catch(err => {
    console.error('Error seeding database:', err);
    process.exit(1);
});
