exports.handleError = (err, req, res ) =>{
    console.log(err)
    console.log('Handled Error')
    return res.status(500).send({message: "Handled Error."})
}