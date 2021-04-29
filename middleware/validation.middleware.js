exports.validateForm = async (req, res, next) => {
    let {username, password} = req.body
    if (!username || typeof username !== 'string'
        || !password || typeof password !== 'string') {
        res.status(401).send(false);
    } else {
        next()
    }
}

exports.isAdmin = async (req, res, next) => {
    if(res.locals.user.isAdmin === true) next()
    else res.status(403).send(false);
}