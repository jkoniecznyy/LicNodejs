const path = require('path')
const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const config = require("./config/auth.config.js");
const errorHandler = require('./middleware/errorHandler.middleware')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'client/public')));
app.use(cookieParser(config.secret))

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err.message);
        process.exit();
    });

// routes
require('./routes/auth.routes')(app);
require('./routes/test.routes')(app);
require('./routes/transaction.routes')(app);
require('./routes/property.routes')(app);
app.use(errorHandler.handleError)

app.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://localhost:${config.port}/`);
});