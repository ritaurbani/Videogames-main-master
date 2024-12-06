const express = require("express");
const app = express();
const port = 3000;
const gamesRouters = require("./routers/videogames");
const handleError = require("./middleware/handleError");

app.use(express.json());
app.use("/videogames", gamesRouters);


app.get('/', (req, res) => {
    ciao();
    res.json('Hello world');

});

app.use(handleError);

app.listen(port, () => {
    console.log('server è partito');
    
});