const connection = require('./connection');

// Vai ser necessário listar todas as tarefas de um user especifico
const getAllTasks = async () => {
  const [response] = await connection.execute('SELECT * FROM OrganizadorDeTarefas.tasks');

  return response;
};

const getTaskById = async (id) => {
  const [response] = await connection
    .execute(`SELECT * FROM OrganizadorDeTarefas.tasks
      WHERE id = ?`, [id]);

  return response;
};

const createTask = async ({ userId, title, statusId }) => {
  const [response] = await connection
    .execute(`INSERT INTO OrganizadorDeTarefas.tasks
    (user_id, title, status_id) VALUES (?, ?, ?)`, [userId, title, statusId]);

  return response;
};

const updateTask = async ({ id, title, statusId }) => {
  const [response] = await connection
    .execute(`UPDATE OrganizadorDeTarefas.tasks
      SET title=?, status_id=? WHERE id=?`, [title, statusId, id]);

  return response;
};

const deleteTask = async ({ id }) => {
  const [response] = await connection
    .execute(`DELETE FROM OrganizadorDeTarefas.tasks
      WHERE id=?`, [id]);

  return response;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
