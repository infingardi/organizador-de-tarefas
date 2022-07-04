const connection = require('./connection');
const generateToken = require('../utils/generateToken');
const { sendError } = require('../utils/handleErro');

const verifyUserExists = async (email) => {
  const [response] = await connection
    .execute('SELECT * FROM OrganizadorDeTarefas.users WHERE email = ?', [email]);

  return response;
};

const createUser = async ({ name, password, email }) => {
  const user = await verifyUserExists(email);
  if (user.length !== 0) return sendError(400, 'Este email já está em uso');

  const [response] = await connection
    .execute(`INSERT INTO OrganizadorDeTarefas.users (name, password, email)
      VALUES (?,?,?)`, [name, password, email]);

  return {
    id: response.insertId, name, email, password,
  };
};

const loginUser = async ({ email, password }) => {
  const [user] = await verifyUserExists(email);

  // Verifica se email e senha estão corretos
  if (user.length === 0) return sendError(400, 'Senha ou email incorreto');
  if (user.password !== password) return sendError(400, 'Senha ou email incorreto');

  // Gera token sem a chave password
  delete user.password;
  const token = generateToken({ user });

  return { token };
};

module.exports = {
  createUser,
  loginUser,
};
