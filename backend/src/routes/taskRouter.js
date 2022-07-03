const { Router } = require('express');
const controller = require('../controllers/taskController');

const taskRouter = Router();

taskRouter.get('/tasks', controller.getAllTasks);

module.exports = taskRouter;
