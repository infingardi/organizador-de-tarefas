const { sendError } = require('./handleErro');

// eslint-disable-next-line consistent-return
const verifyName = (name) => {
  if (!name || name < 2) {
    return sendError(400, '"name" length must be at least 2 characters long');
  }
};

// eslint-disable-next-line consistent-return
const verifyEmail = (email) => {
  if (!email) return sendError(400, `"email" is required ${email}`);
  const validEmail = email.includes('@') && email.includes('.com');
  if (!validEmail) return sendError(400, '"email" must be a valid email');
};

// eslint-disable-next-line consistent-return
const verifyPassword = (password) => {
  if (!password || password.length < 6) {
    return sendError(400, '"password" length must be at least 6 characters long');
  }
};

// eslint-disable-next-line consistent-return
const verifyTitle = (title) => {
  if (!title || title.length < 6) return sendError(400, '"title" is required and length must be at least 6 characters long');
};

// eslint-disable-next-line consistent-return
const verifyStatusId = (statusId) => {
  if (statusId === undefined || statusId > 3 || statusId < 0) {
    return sendError(400, '"statusId" is required and must be between 0 and 3');
  }
};

const verifyParametersCreateUser = ({ name, email, password }) => {
  verifyName(name);
  verifyEmail(email);
  verifyPassword(password);
};

const verifyParametersLoginUser = ({ email, password }) => {
  verifyEmail(email);
  verifyPassword(password);
};

const verifyParametersCreateTask = ({ title, statusId }) => {
  verifyTitle(title);
  verifyStatusId(statusId);
};

module.exports = {
  verifyParametersCreateUser,
  verifyParametersLoginUser,
  verifyParametersCreateTask,
};
