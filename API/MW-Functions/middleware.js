const bcrypt = require('bcryptjs');

// const note_check = function(req, res, next) {
//   const note = req.body;
// }

const pw_check = function(req, res, next) {
  if (users.length && bcrypt.compareSync(req.user.password, users[0].password)) {
    next();
  }
  else {
    res.status(401).json({error: "Invalid username or password."})
  }
}

module.exports = pw_check