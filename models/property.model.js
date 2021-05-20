const mongoose = require('mongoose')
const {Decimal128} = require("bson");

const PropertySchema = new mongoose.Schema(
    {
        userId:         {type: [String]},
        description:    {type: String, required: true},
        type:           {type: String, required: true},
        rent:           {type: Decimal128, required: true}
    },
    {collection: 'properties'}
)

const model = mongoose.model('PropertySchema', PropertySchema)

module.exports = model