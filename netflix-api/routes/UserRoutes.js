const { addToLikedMovies, getLikedMovies, removeFromLikedovies } = require("../controllers/UserController");

const router = require("express").Router();

router.post('/add',addToLikedMovies);

router.get('/liked/:email',getLikedMovies)

router.put('/delete',removeFromLikedovies)


module.exports = router;