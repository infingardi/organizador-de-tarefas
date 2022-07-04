const taskModel = require('../models/taskModel');
const { verifyParametersCreateTask } = require('../utils/verifiers');

const getAllTasks = async (userId) => {
  const tasks = await taskModel.getAllTasks(userId);

  return tasks;
};

const getTaskById = async (id) => {
  const task = await taskModel.getTaskById(id);

  return task;
};

const createTask = async ({ userId, title, statusId }) => {
  verifyParametersCreateTask({ title, statusId });

  const task = await taskModel.createTask({ userId, title, statusId });

  return task;
};

const updateTask = async ({ id, title, statusId }) => {
  verifyParametersCreateTask({ title, statusId });

  const task = await taskModel.updateTask({ id, title, statusId });

  return task;
};

const deleteTask = async ({ id }) => {
  const task = await taskModel.deleteTask({ id });

  return task;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
