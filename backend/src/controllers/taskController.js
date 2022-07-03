const taskService = require('../services/taskService');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await taskService.getTasksById(id);

    return res.status(200).json(task);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const { userId, title, statusId } = req.body;
    const task = await taskService.createTask({ userId, title, statusId });

    return res.status(201).json(task);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
};
