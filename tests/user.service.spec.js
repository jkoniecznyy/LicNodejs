"use strict";

const mongoose = require('mongoose');
const chai = require('chai');
global.expect = chai.expect
const UserService = require('../services/user.service')

/**
 * Before starting the test, create a connection with testing database
 * Once a connection is established invoke done()
 */
describe('UserService Tests', async () => {
    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/test_licencjat', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function () {
            console.log('Successfully connected to the testing database');
            done();
        });
    });

    it('Add User to database', async () => {
        const result = await UserService.addUserToDatabase(
            'harry@potter.com',
            'ChoChang123',
            false
        )
        expect(result, true)
    })
    it('Find User by email', async () => {
        const result = await UserService.findUserByEmail('harry@potter.com')
        expect(result).have.property('email')
    })


    /**
     * After all tests are finished drop database and close connection
     */
    after(function (done) {
        mongoose.connection.db.dropDatabase(() => {
            mongoose.connection.close(done);
        });
    })
});