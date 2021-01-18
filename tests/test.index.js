const chai = require('chai')
global.expect = chai.expect

const mongoose = require('mongoose')

before(function () {
    mongoose.connect('mongodb://localhost:27017/test_licencjat', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Successfully connected to test MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });
})
after(function () {
    mongoose.connection.close()
        .then(() => {
            console.log("Successfully disconnected from test MongoDB.");
        })
})

require('./services/user.service.test')
require('./controllers/user.controller.test')
