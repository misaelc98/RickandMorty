const { Router } = require("express");
const { addFav, deleteFav } = require("../controllers/handleFavourites");
const login = require("../controllers/loginController");
const getCharById = require("../controllers/getCharById");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", addFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
