const connection = require('./connection');

const getAllTasks = async () => {
  const [response] = await connection.execute('SELECT * FROM OrganizadorDeTarefas.tasks');

  return response;
};

const getTaskById = async (id) => {
  const [response] = await connection
    .execute(`
      SELECT * FROM OrganizadorDeTarefas.tasks
      WHERE id = ?`, [id]);

  return response;
};

module.exports = {
  getAllTasks,
  getTaskById,
};
