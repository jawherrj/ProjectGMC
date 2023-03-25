const exprss = require("express");
const { register, login } = require("../controllers/authControllers");
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
module.exports = router;
