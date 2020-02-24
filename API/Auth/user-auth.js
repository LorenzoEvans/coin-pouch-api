const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SEC;
// pull jwtKey off of env var

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  // pull auth token out of request header
  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      // tries to verify token by decoding via key,
      // either returns decoded token or throws error
      if (err) {
        res.status(401).json({error_message: "Error decoding.", error: err.message})
      }
      else { req.decoded = decoded; next();} // next passes control off to next mw function in pipeline or back to request handler.
    })
  }
  else {
    res.status(401)
       .json({error: 'Token', resolve: {
         attempt_to: "Set token to authorization header."
       }})
  }
}

module.exports = auth;