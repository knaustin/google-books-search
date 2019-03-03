const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router
.route("/")
    .get(booksController.findAll);

module.exports = router; 

