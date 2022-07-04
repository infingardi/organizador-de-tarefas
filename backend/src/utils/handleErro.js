const sendError = (code, message) => {
  const error = JSON.stringify({ code, message });

  throw new Error(error);
};

const getError = (error, res) => {
  try {
    const erro = JSON.parse(error.message);

    return res.status(erro.code).json({ message: error.message });
  } catch (err) {
    return res.status(500).json({ message: 'problem not yet identified' });
  }
};

module.exports = { sendError, getError };
