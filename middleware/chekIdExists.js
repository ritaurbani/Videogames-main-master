const gamesList = require("../data/videogames")

const checkIdExists = (req, res, next) => {
    console.log("controllo se esiste");
    const id = parseInt(req.params.id)
    const videogame = gamesList.find((curgame)=> curgame.id === id)
    if(videogame) {
        next();
    } else {
        res.statusCode = 404
        res.json({
            error: true,
            message: "Not Found"
        })
    }
}

module.exports = checkIdExists;


