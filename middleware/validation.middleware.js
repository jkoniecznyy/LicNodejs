exports.validateForm = async (req, res, next) => {
    let {email, password} = req.body
    if (!email || typeof email !== 'string'
        || !password || typeof password !== 'string') {
        res.status(401).send({message: "Wrong data provided."});
    } else {
        next()
    }
}

exports.isAdmin = async (req, res, next) => {
    if(res.locals.user.isAdmin === true) next()
    else res.status(403).send(false);
}