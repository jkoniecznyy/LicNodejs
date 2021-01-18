const Property = require('../model/property.model')

exports.addProperty = async (req, res) => {
    console.log("Adding property")
    const {userId, description, type} = req.body
    try {
        const response = await Property.create({
            userId,
            description,
            type
        })

        console.log('Property created successfully!', response)
        return res.status(201).send({
            message: 'Property added'
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Cannot add a property."})
    }
}