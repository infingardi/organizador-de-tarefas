const taskModel = require('../models/taskModel');

const getAllTasks = async () => {
  const tasks = await taskModel.getAllTasks();

  return tasks;
};

const getTaskById = async (id) => {
  const task = await taskModel.getTaskById(id);

  return task;
};

module.exports = {
  getAllTasks,
  getTaskById,
};
