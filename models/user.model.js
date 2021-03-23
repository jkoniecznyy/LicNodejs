const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema( //TODO add email
    {
        username:   {type: String, required: true, unique: true},
        password:   {type: String, required: true},
        properties: {type: [String]},
        isAdmin: {type: Boolean, default: false}
    },
    {collection: 'users'}
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model