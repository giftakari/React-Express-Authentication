var express = require("express");
var router = express.Router();

//GET /Register

router.get("/register", (req, res, next) => {
  return res.render("register", { title: " Signup" });
});

// Post/ Register
router.post("/register", (req, res, next) => {
  return res.send("user created");
});

// GET /
router.get("/", function(req, res, next) {
  return res.render("index", { title: "Home" });
});

// GET /about
router.get("/about", function(req, res, next) {
  return res.render("about", { title: "About" });
});

// GET /contact
router.get("/contact", function(req, res, next) {
  return res.render("contact", { title: "Contact" });
});

module.exports = router;
