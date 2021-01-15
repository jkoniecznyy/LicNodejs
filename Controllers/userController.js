const User = require('../model/user')

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
