const express = require("express");
const { createUser, deleteUser, findUser } = require("../controller/user.controller");
const userRout = express.Router();

userRout.post("/createUser", createUser)
userRout.post("/deleteUser", deleteUser)
userRout.post("/findUser", findUser)

module.exports = userRout;