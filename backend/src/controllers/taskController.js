const taskService = require('../services/taskService');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  getAllTasks,
};
