exports.confirmAccess = (req, res) => {
    console.log('confirming access')
    res.status(200).send(true);
};
exports.throwErr = (req, res) => {
    throw 'Catch me if you can'
}