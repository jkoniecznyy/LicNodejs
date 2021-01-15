const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema(
    {
        userId:         {type: [String]},
        description:    {type: String, required: true},
        type:           {type: String, required: true}
    },
    {collection: 'properties'}
)

const model = mongoose.model('PropertySchema', PropertySchema)

module.exports = model