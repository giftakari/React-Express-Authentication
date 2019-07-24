const express = require("express");
const router = express.Router();
const User = require("../models/user");

//GET /Register

router.get("/register", (req, res, next) => {
  return res.render("register", { title: " Signup" });
});

// Post/ Register
router.post("/register", (req, res, next) => {
  if (
    req.body.email &&
    req.body.name &&
    req.favouriteBook &&
    req.body.confirmPassword
  ) {
    if (req.body.password != req.body.confirmPassword) {
      let err = new Error("Password do not match");
      err.status = 400;
      return next(err);
    }
  } else {
    let err = new Error("All fields required");
    err.status = 400;
    return next(err);
  }
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
