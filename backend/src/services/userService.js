const userModel = require('../models/userModel');
const { verifyParametersCreateUser, verifyParametersLoginUser } = require('../utils/verifiers');

const createUser = async ({ name, password, email }) => {
  verifyParametersCreateUser({ name, password, email });

  const user = await userModel.createUser({ name, password, email });

  return user;
};

const loginUser = async ({ email, password }) => {
  verifyParametersLoginUser({ email, password });

  const user = await userModel.loginUser({ email, password });

  return user;
};

module.exports = {
  createUser,
  loginUser,
};
