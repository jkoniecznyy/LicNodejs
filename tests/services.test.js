// const mongoose = require('mongoose')
// const userService = require('../services/user.service')
// const transactionService = require('../services/transtaction.service')
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/test_licencjat', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
//     .then(() => {
//         console.log("Successfully connected to MongoDB.");
//     })
//     .catch(err => {
//         console.error("Connection error", err);
//         process.exit();
//     });
//
// beforeEach((done) => {
//     mongoose.connection.collections.pokemons.drop(() => {
//         //this function runs after the drop is completed
//         done(); //go ahead everything is done now.
//     });
// });
//
// test('Finds user by id', () => {
//     expect("user").toEqual("user")
// })