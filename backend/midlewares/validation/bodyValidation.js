const { body, validationResult } = require("express-validator");
const customeError = (errors) => errors.map((e) => ({ msg: e.msg }));
module.exports.registerRules = [
  body("name")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("name must be more than 3 characters"),
  //
  body("lastName")
    .notEmpty()
    .trim()
    .isLength({ min: 3 })
    .withMessage("last name must be more than 3 characters"),
  //
  body("email")
    .isEmail()
    .normalizeEmail()
    .trim()
    .withMessage("enter a valid mail addresse"),
  //
  body("password")
    .notEmpty()
    .trim()
    .isLength({ min: 5 })
    .withMessage("password is required"),
  //
];
module.exports.loginRules = [
  //
  body("email").isEmail().trim().withMessage("enter a valid mail addresse"),
  //
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password is required"),
  //
];

module.exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: customeError(errors.array()) });
  }
  next();
};
