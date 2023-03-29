const userModel = require("../model/User");
const { hPassword, comparePassword } = require("../utils/passwordFunc");
const createToken = require("../utils/token");
//register controler
module.exports.register = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    //verifier if the user exist
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user exist" });
    }
    const hashed = await hPassword(password);
    const user = new userModel({ ...req.body, password: hashed });
    await user.save();
    res.send({ msg: "the user successfully created" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

//login controler
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    //verifier if the user exist
    const existUser = await userModel.findOne({ email });

    if (!existUser) {
      return res.status(400).send({ msg: "Bad credentials(email)" });
    }
    // //verifier if the pssword is correct
    const match = await comparePassword(password, existUser.password);
    if (!match) {
      return res.status(400).send({ msg: "Bad credentials(password)" });
    }
    // //token creation
    const payload = { userid: existUser._id };
    const token = await createToken(payload);
    // existUser.password = undefined;
    console.log(token);
    res.send({ token });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
//get the current user
module.exports.getCurrentUser = async (req, res) => {
  try {
    await res.send({ user: req.user });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
// get all users
module.exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.send({ users: allUsers });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
