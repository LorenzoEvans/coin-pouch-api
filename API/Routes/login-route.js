const dotenv = require('dotenv');
dotenv.config()

const Zk = require('@nuid/zk');
const axios = require('axios');
const instance = axios.create({baseURl: 'https://auth.nuid.io/'})

instance.defaults.headers['X-API-Key'] = process.env.NUID_API_KEY;
instance.defaults.headers['Content-Type'] = 'application/json';

const base_url = "https://auth.nuid.io/credential";

const generateCredential = async () => {
  const proof = Zk.proofFromSecret('test');
  try {
    const response = await axios.post(base_url);
    console.log(response);
  } 
  catch (error) {
    console.log(error.message)
    console.debug(error)
  }
}