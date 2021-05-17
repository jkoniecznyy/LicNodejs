const propertyService = require("../services/property.service");

exports.addProperty = async (req, res) => {
    try {
        console.log("Adding property")
        const {userId, description, type, rent} = req.body

        const response = await propertyService.createProperty(userId, description, type, rent)

        if (response) return res.status(201).send({message: "Property created successfully!"})
        else return res.status(401).send({message: "Couldn't create your Property!"})
    } catch (err) {
        res.status(500).send({message: "Couldn't create your transaction!"})
    }
}

exports.getUserProperties = async (req, res) => {
    console.log('getUserProperties ')
    try {
        const properties = await propertyService.getUserProperties(res.locals.userId)
        console.log(properties)
        res.status(200).send(properties)
    } catch (err) {
        res.status(500).send({message: "Couldn't get your transactions!"})
    }
}

exports.getAllProperties = async (req, res) => {
    console.log('getAllProperties ')
    try {
        const properties = await propertyService.getAllProperties()

        res.status(200).send(properties)
    } catch (err) {
        res.status(500).send({message: "Couldn't get all transactions!"})
    }
}
