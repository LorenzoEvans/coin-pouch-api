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
  const payload = {user: user};
  const secret = process.env.JWT_SEC;
  const options = {
    expiresIn: "8h",
    jwtid: "e6^$@#AHD*@#D9230gr@J12R2@*^#t"
  },

  return jwt.sign(payload, secret, options);
}

router.post('/', (req, res) => {
  const user = req.body;
  userDB.login(users)
        .then((users) => {
          if (users.length || bcrypt.compareSync(user.password, users[0].password)) {
            const token = generate_token(user);
            res.json({message: "Login successful", token: token});
          }
        })
        .catch((err) => {
          res.status(500).json({error_message: "Unable to login!", error: err.message})
        })
})

module.exports = router;