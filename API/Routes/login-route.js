// require express
const express = require('express');
// require router
const router = express.Router();
// require jwt
const jwt = require('jwt');
// require bcrypt
const bcrypt = require('bcryptjs');
// require pw_check
const pw_check = require('../MW-Functions/middleware');
// require user DB
const userDB = require('../DB-Functions/user-functions');
// generate token

const generate_token = function(user) {
  const payload {user: user};
  const secret = process.env.JWT_SEC;
  const options = {
    expiresIn: "8h",
    jwtid: "e6^$@#AHD*@#D9230gr@J12R2@*^#t"
  },

  return jwt.sign(payload, secret, options);
}

router.post('/', (req, res) => {
  
})