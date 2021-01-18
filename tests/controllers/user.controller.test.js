userController = require('../../controllers/user.controller')
const User = require('../../model/user.model')
const {req, res} = require("express");

describe('user controller tests', function () {
    describe('createUser', async function () {
        beforeEach(async function () {
            await User.deleteMany({})
        })
        req.body = {
            "username": "test",
            "password": "test"
        }
        await userController.createUser(req, res)


        it('creates user in the db', async function () {
            expect(await User.countDocuments()).to.equal(1)
        })

    })
})