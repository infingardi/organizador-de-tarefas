const connection = require('./connection');

const verifyUserExists = async (email) => {
  const [response] = await connection
    .execute('SELECT * FROM OrganizadorDeTarefas.users WHERE email = ?', [email]);

  return response;
};

const createUser = async ({ name, password, email }) => {
  const user = await verifyUserExists(email);
  if (user.length !== 0) throw new Error('este email já está em uso');

  const [response] = await connection
    .execute(`INSERT INTO OrganizadorDeTarefas.users (name, password, email)
      VALUES (?,?,?)`, [name, password, email]);

  return {
    id: response.insertId, name, email, password,
  };
};

const loginUser = async ({ email, password }) => {
  const [user] = await verifyUserExists(email);

  if (user.length === 0) throw new Error('senha ou email incorreto');
  if (user.password !== password) throw new Error('senha ou email incorreto');

  // realizar geração de token
  return 'logado';
};

module.exports = {
  createUser,
  loginUser,
};
