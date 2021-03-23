exports.handleError = (err, req, res, next) =>{
    console.log('Handled Error:')
    console.log(err.message)
    return res.status(err.status || 500).send({message: "Handled Error Occurred."})
}