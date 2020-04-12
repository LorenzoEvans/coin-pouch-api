// require express
const express = require('express');
// require router
// require axios
const axios = require('axios');
// require jwt
const jwt = require('jwt');
// require bcrypt
const bcrypt = require('bcryptjs');
// require pw_check
const pw_check = require('../MW-Functions/middleware');
// require user DB
const userDB = require('../DB-Functions/user-functions');
// generate token

const Zk = require('@nuid/zk');

const body = Zk.proofFromSecret('test');

const base_url = "https://auth.nuid.io/"

const generate_token = function(user) {
  const payload = {user: user};
  const secret = process.env.JWT_SEC;
  const options = {
    expiresIn: "8h",
    jwtid: "e6^$@#AHD*@#D9230gr@J12R2@*^#t"
  },

  return jwt.sign(payload, secret, options);
}

const makeConfig = (method, body, headers) => {
  if (headers) {
    const axiosConfigObject = {method: method, body: JSON.stringify(body), headers: headers}
  }
  else {
    
    const axiosConfigObject = {method: method, body: JSON.stringify(body)}
  }
}

const generateCredential = async () => {
  axios.post(base_url, makeConfig('POST', body,))
}


module.exports = router;