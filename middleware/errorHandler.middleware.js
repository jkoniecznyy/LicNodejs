exports.handleError = (err, req, res, next) =>{
    console.log(err)
    console.log('Handled Error')
    return res.status(err.status || 500).send({message: "Handled Error Occured."})
}