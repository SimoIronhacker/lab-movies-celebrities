const router = require("express").Router();

const moviesModel = require("./../models/Movies.model")

/* GET home page */
router.get("/", (req, res, next) => {
  moviesModel.find()
  .then((dbmovie) => res.render("movies/movies.hbs", {movies: dbmovie}))
  .catch(next);
});

router.get("/create", async (req, res, next) => {
  res.render("movies/new-movie.hbs");
});

router.post("/create", (req, res, next) => {
  console.log(req.body);
  moviesModel
  .create(req.body)
  .then(movies => res.redirect("/movies"))
  .catch(err => res.redirect("/movies/new-movies"))
});

module.exports = router;
