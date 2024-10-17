const mongoose = require('mongoose');

// Use your local MongoDB URI for development
const dbURI = "mongodb://localhost:27017/loc8r"; 
// If you later want to switch to MongoDB Atlas, uncomment the line below
// const dbURI = "mongodb+srv://<username>:<password>@cluster0.twow8.mongodb.net/loc8r";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connection event handlers
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`); // Fixed template string syntax
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Graceful shutdown function
const gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// Handle application termination events
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

process.on('SIGTERM', function () {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

// Require your models
require("./user");
require("./location");
