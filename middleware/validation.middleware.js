exports.validateForm = async (req, res, next) => {
    let {username, password} = req.body
    if (!username || typeof username !== 'string') {
        res.status(401).send({message: 'Validation failed: wrong username'});
        return;
    }
    if (!password || typeof password !== 'string') {
        res.status(401).send({message: 'Validation failed: wrong password'});
        return;
    }
    next()
}

exports.isAdmin = async (req, res, next) => {
    if(res.locals.user.isAdmin === true) next()
    else res.status(403).send({message: "No permission"});
}