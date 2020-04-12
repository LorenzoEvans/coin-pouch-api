const dotenv = require('dotenv');
dotenv.config()
// require express
const express = require('express');
// require router
// require axios
const axios = require('axios');
// require jwt
// require bcrypt
const bcrypt = require('bcryptjs');
// require pw_check
const pw_check = require('../MW-Functions/middleware');
// require user DB
const userDB = require('../DB-Functions/user-functions');
// generate token


const Zk = require('@nuid/zk');

const base_url = "https://auth.nuid.io/";


const makeConfig = (body) => {
    const axiosConfigObject = {body: JSON.stringify(body), headers: {'X-API-KEY': process.env.NUID_API_KEY, 'Content-Type': 'application/json'}};
    return axiosConfigObject;
}

const generateCredential = async () => {
  const proof = Zk.proofFromSecret('test');
  try {
    const response = await axios.post(base_url, makeConfig(proof));
    console.log(response);
  }
  catch (error) {
    let errorObj = {error: error.message, error_msg: "There was an error generating credentials."}
    console.log(error)
  }
}

console.log(generateCredential())
