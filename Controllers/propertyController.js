const Property = require('../model/property')

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
        return res.status(200).send({   //TODO jak to jest z returnami
            status: 'Property added'
        });
    } catch (error) {
        console.log(error)
        return res.status(404).send({message: "Cannot add a property."})
    }
}