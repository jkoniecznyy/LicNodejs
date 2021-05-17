const UserService = require('../services/user.service')
/**
 * Hash the password and add User to Database
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.createUser = async (req, res) => {
    console.log('Creating user')
    let {email, password, isAdmin} = req.body
    const hashedPassword = await UserService.hashPassword(password)
    const result = await UserService.addUserToDatabase(email, hashedPassword, isAdmin)
    if (result === true) return res.status(201).send({message: 'User created successfully!'});
    return res.status(500).send({message: "Cannot create a user."})
}

/**
 * Validate the password and send back the userToken
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.login = async (req, res) => {
    console.log('Logging user')
    const isPasswordValid = await UserService.validatePassword(req.body.password, res.locals.user)
    if (isPasswordValid === false) return res.status(401).send({message: "Authentication failed."})

    const token = UserService.createUserToken(res.locals.user._id)
    if (token !==null){
        res.cookie("userToken", token, {
            httpOnly: true,
            sameSite: 'lax',
            // secure: true
        });
        return res.status(200).send({message: "Login successful."});
    }else {
        return res.status(500).send({message: "Login failed."})
    }
};
/**
 * Clear the userToken cookie
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.logout = async (req, res) => {
    console.log('Logging out')
    console.log(req.cookies)
    res.clearCookie("userToken")
    res.status(200).send({
        message: 'Logged out'
    });
};

/**
 * Take email from req and call UserService to find the user
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
exports.findUserByEmail = async (req, res, next) => {
    console.log('findUserByEmail')
    const user = await UserService.findUserByEmail(req.body.email)
    if (user === null) return res.status(404).send({message: "Authentication failed.."});
    res.locals.user = user
    next()
}

/**
 * Hash the password and call UserService.editPasswordInDatabase
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.changePassword = async (req, res) => {
    console.log('Changing password')
    const {password} = req.body
    const _id = res.locals.userId
    const hashedPassword = await UserService.hashPassword(password)
    const result = await UserService.editPasswordInDatabase(_id, hashedPassword)
    if (result === true) {
        return res.status(200).send({
            message: 'Password changed'
        });
    }
    return res.status(500).send({message: "Password change failed."})
};
