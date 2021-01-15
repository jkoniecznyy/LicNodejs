const User = require('../model/user')

exports.findUserById = async (req, res, next) => {
    console.log('findUserById')
    try {
        User.findOne({
            _id: res.locals.userId
        }).exec((err, user) => {
            if (err) return res.status(500).send({message: err});
            if (!user) return res.status(404).send({message: "User Not found."});

            res.locals.user = user
            next()
        })
    } catch (err) {
        console.log('findUserById', err)
        res.status(500).send({message: err});
    }
}

exports.findUserByUsername = async (req, res, next) => {
    console.log('findUserByUsername')
    try {
        User.findOne({
            username: req.body.username
        }).exec((err, user) => {

            if (err) return res.status(500).send({message: err});
            if (!user) return res.status(404).send({message: "User Not found."});

            res.locals.user = user
            next()
        })
    } catch (err) {
        res.status(500).send({message: err});
    }
}

exports.checkDuplicatedUsername = async (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {

        if (err) return res.status(500).send({message: err});
        if (user) return res.status(400).send({message: "Failed! Username is already in use!"});

        next();
    });
};


