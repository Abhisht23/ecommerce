var express = require("express");
var router = express.Router();
const { check } = require('express-validator');
const { signout, isSignedIn } = require("../controllers/auth");
const { signup, signin } = require("../controllers/auth");

// router.get("/signout", (req, res) => {
//     res.send("user signout")
// })

// const signout = (req, res) => {
//     res.send("user signout success");
// };

router.post("/signup",[
    check("name" , "name should be atleast three char").isLength({ min: 3}),
    check("email" , "email is required").isEmail(),
    check("password" , "password should be atleast 6 char").isLength({ min: 6})
], 
signup
);

router.post("/signin",[
    check("email" , "email is required").isEmail(),
    check("password" , "password is required").isLength({ min: 1})
], signin);


router.get("/signout", signout);

// router.get("/testroute", isSignedIn, (req, res) => {
//  //   res.send("A protected route");
//  res.json(req.auth);
     
//  });

module.exports = router;