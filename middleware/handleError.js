const handleError = (err, req, res, next) => {
    console.log("gestione di errori interni al server")
    res.statusCode = 500
    res.json({
        error: true,
        message:"errore interno del server"
    });
}

module.exports = handleError;