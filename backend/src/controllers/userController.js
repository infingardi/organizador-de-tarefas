const userService = require('../services/userService');
const { getError } = require('../utils/handleErro');

const createUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const user = await userService.createUser({ name, password, email });

    return res.status(201).json(user);
  } catch (error) {
    return getError(error, res);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.loginUser({ email, password });

    return res.status(200).json(user);
  } catch (error) {
    return getError(error, res);
  }
};

module.exports = {
  createUser,
  loginUser,
};
