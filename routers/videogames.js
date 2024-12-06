const express = require("express");
const router = express.Router();
const videogameController = require("../controllers/videogameController")

const checkIdExists = require("../middleware/chekIdExists");

// index
router.get('/', videogameController.index);

// show
router.get('/:id', checkIdExists, videogameController.show);

// create
router.post('/', videogameController.create);

// update
router.put('/:id', checkIdExists, videogameController.update);

// modify
router.patch('/:id', checkIdExists, videogameController.modify);

// destroy
router.delete('/:id', checkIdExists, videogameController.destroy);



module.exports = router;