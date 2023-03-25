var jwt = require("jsonwebtoken");
const createToken = (payload) => {
  return jwt.sign(payload, process.env.jwtcode, { expiresIn: "2d" });
};
module.exports = createToken;
