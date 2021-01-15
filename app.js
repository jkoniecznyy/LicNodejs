const path = require('path')
const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const config = require("./config/auth.config.js");


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(cookieParser(config.secret))


mongoose.connect('mongodb://localhost:27017/licencjat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/transaction.routes')(app);
require('./routes/property.routes')(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
});