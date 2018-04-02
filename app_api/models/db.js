const mongoose = require("mongoose");

const dbURL = 'mongodb://root:azerty@ds211289.mlab.com:11289/my-cv';

mongoose.connect(dbURL);


mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ', dbURL);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});


mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error:', err);
});

require('./appSchemas');