const User = require('../model/user')

exports.findUserByUsername = async (req, res, next) => {
    try {
        User.findOne({
            username: req.body.username
        }).exec((err, user) => {
            if (err) {
                console.log('findUserByUsername - err')
                res.status(500).send({message: err});
            }

            if (!user) {
                console.log('findUserByUsername - no user')
                res.status(404).send({message: "User Not found."});
            }
            if (user) {
                res.locals.user = user
                console.log('findUserByUsername -', res.locals.user)
                next()
            }
        })
    } catch (err) {
        console.log('findUserByUsername', err)
        res.status(500).send({message: err});
    }
}

exports.checkDuplicatedUsername = async (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({message: err});
            return;
        }
        if (user) {
            res.status(400).send({message: "Failed! Username is already in use!"});
        } else {
            next();
        }

    });
};


