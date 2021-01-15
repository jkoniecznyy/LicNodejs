const bcrypt = require('bcryptjs')

validateForm = async (req, res, next) => {
    let {username, password} = req.body
    if (!username || typeof username !== 'string') {
        res.status(400).send({message: 'Validation failed: wrong username'});
        return;
    }
    if (!password || typeof password !== 'string') {
        res.status(400).send({message: 'Validation failed: wrong password'});
        return;
    }
    next()
}
validatePassword = async (req, res, next) => {
    try {
        if (!res.locals.user) return res.status(401).send({message: "Couldn't find a user!"})
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            res.locals.user.password
        )
        if (!passwordIsValid) return res.status(401).send({message: "Invalid Password!"})
        next()

    } catch (err) {
        console.log(err)
        return res.status(401).send({message: "Couldn't find a user!"})
    }
    //TODO tu coś mi nie gra
}


const validateFunctions = {
    validateForm,
    validatePassword
};

module.exports = validateFunctions;