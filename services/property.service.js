const Property = require('../models/property.model')

exports.getAllProperties = async () => {
    return Property.find({})
}

exports.getUserProperties = async (userId) => {
    return Property.find({userId});
}

exports.createProperty = async (userId, description, type) => {
    const newProperty = await Property.create({
        userId,
        description,
        type
    })
    return isProperty(newProperty)
}

const isProperty = (object) => {
    return (object instanceof Property)
}