const express = require('express');
const router = express.Router()
const userController = require("../controller/userController");


// ---------------------------------------- USER API's -------------------------------------------
router.post("/register", userController.signUp) //craete user

 router.post("/login", userController.login)  //Login




 module.exports = router