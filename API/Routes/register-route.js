require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userDB = require('../DB-Functions/user-functions');

router.post('/', (req, res) => {
  const user = req.body;
  const pw_hash = bcrypt.hashSync(user.password, 16);
  userDB.register(user)
        .then((ids) => {
          res.status(201)
             .json({message: "You have successfully registered and account.", id: ids[0]})
        })
        .catch((err) => {
          res.status(500)
             .json({error_message: "There was an issue registering your account", error: err.message})
        })
})

module.exports = router