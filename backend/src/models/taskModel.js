const connection = require('./connection');

const getAllTasks = async () => {
  const [response] = await connection.execute('SELECT * FROM OrganizadorDeTarefas.tasks');

  return response;
};

module.exports = {
  getAllTasks,
};
