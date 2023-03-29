const exprss = require("express");
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/authControllers");
const isauth = require("../midlewares/authorization/isauth");
const {
  registerRules,
  validator,
  loginRules,
} = require("../midlewares/validation/bodyValidation");
const router = exprss.Router();

/**
 * @methode POST /auth/signup
 * @description register new user
 * @access public
 */
router.post("/signup", registerRules, validator, register);
module.exports = router;

/**
 * @methode POST /auth/signup
 * @description register new user
 * @access public
 */
router.post("/signin", loginRules, validator, login);

/**
 * @methode GET /auth/
 * @description athentified user
 * @access private
 */
router.get("/", isauth(), getCurrentUser);

module.exports = router;
