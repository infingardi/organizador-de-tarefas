const taskModel = require('../models/taskModel');

const getAllTasks = async () => {
  const tasks = await taskModel.getAllTasks();

  return tasks;
};

module.exports = { getAllTasks };
