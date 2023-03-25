const bcrypt = require("bcrypt");
module.exports.hPassword = async (pwd) => {
  try {
    const hashedpassword = await bcrypt.hash(pwd, 10);
    return hashedpassword;
  } catch (error) {
    console.log(error);
  }
};
module.exports.comparePassword = async (pwd, bdpwd) => {
  try {
    const match = await bcrypt.compare(pwd, bdpwd);
    return match;
  } catch (error) {
    console.log(error);
  }
};
