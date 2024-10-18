const mongoose = require('mongoose');

// Use the local MongoDB database
const dbURI = "mongodb://localhost:27017/";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);  
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Import other modules
require("./signin");
require("./register");
