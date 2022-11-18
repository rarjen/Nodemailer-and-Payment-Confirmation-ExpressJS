const { ROLE } = require("../utils/enum");

module.exports = (acess = false) => {
  return async (req, res, next) => {
    const { role } = req.user;

    if (!acess) {
      return res
        .status(401)
        .json({ status: false, message: "you're not authorized!", data: null });
    }

    if (!role) {
      return res
        .status(401)
        .json({ status: false, message: "you're not authorized!", data: null });
    }
    if (role != ROLE.ADMIN) {
      return res
        .status(401)
        .json({ status: false, message: "you're not authorized!", data: null });
    }

    next();
  };
};
