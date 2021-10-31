const router = require("express").Router();

const celebrityModel = require("./../models/Celebrity.model")


/* GET home page */
router.get("/", (req, res, next) => {
  celebrityModel.find()
  .then((dbcelebrity) => res.render("celebrities/celebrities.hbs", {celebrities: dbcelebrity }))
  .catch(next);
  // res.render("celebrities");
});

router.get("/create", async (req, res, next) => {
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/create", (req, res, next) => {
  console.log(req.body);
  celebrityModel
  .create(req.body)
  .then(celebrity => res.redirect("/celebrities"))
  .catch(err => res.redirect("/celebrities/new-celebrity"))

});



module.exports = router;
