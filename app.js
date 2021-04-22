const path = require('path')
const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express()
const config = require("./config/global.config.js");
const errorHandler = require('./middleware/errorHandler.middleware')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
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

// Routes
require('./routes/user.routes')(app);
require('./routes/test.routes')(app);
require('./routes/transaction.routes')(app);
require('./routes/property.routes')(app);
app.use(errorHandler.handleError)

// Handle production
if(process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, '/public/')));
    // Handle SPA
    app.get(/.*/,
        (req, res) =>
            res.sendFile(path.join(__dirname, '/public/index.html')))
}
app.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}`);
});