const isauth = require("./isauth");

const isAdmin = async (req, res, next) => {
  try {
    const auth = await isauth();

    if (req?.user.role != "admin") {
      res.status(403).send({ msg: "you are not an admin" });
    }
    next();
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
module.exports = isAdmin;
