const mongoose = require('mongoose')
const {Decimal128} = require("bson");

const TransactionSchema = new mongoose.Schema(
    {
        userId:         {type: String, required: true},
        propertyId:     {type: String, required: true},     // Q: Relation between Property and Transaction?
        description:    {type: String, required: true},
        date:           {type: Date, default: Date.now},
        value:          {type: Decimal128, required: true}
    },
    {collection: 'transactions'}
)

const model = mongoose.model('TransactionSchema', TransactionSchema)

module.exports = model