const taskService = require('../services/taskService');
const { getError } = require('../utils/handleErro');

const getAllTasks = async (req, res) => {
  try {
    const { userId } = req.body;
    const tasks = await taskService.getAllTasks(userId);

    return res.status(200).json(tasks);
  } catch (error) {
    return getError(error, res);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTaskById(id);

    return res.status(200).json(task);
  } catch (error) {
    return getError(error, res);
  }
};

const createTask = async (req, res) => {
  try {
    const { userId, title, statusId } = req.body;
    const task = await taskService.createTask({ userId, title, statusId });

    return res.status(201).json(task);
  } catch (error) {
    return getError(error, res);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id, title, statusId } = req.body;
    const task = await taskService.updateTask({ id, title, statusId });

    return res.status(200).json(task);
  } catch (error) {
    return getError(error, res);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskService.deleteTask({ id });

    return res.status(204).json(task);
  } catch (error) {
    return getError(error, res);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
