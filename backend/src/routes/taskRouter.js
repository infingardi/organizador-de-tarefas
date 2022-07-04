const { Router } = require('express');
const controller = require('../controllers/taskController');

const taskRouter = Router();

taskRouter.get('/tasks', controller.getAllTasks);
taskRouter.get('/tasks/:id', controller.getTaskById);
taskRouter.post('/tasks', controller.createTask);
taskRouter.put('/tasks/:id', controller.updateTask);
taskRouter.delete('/tasks/:id', controller.deleteTask);

module.exports = taskRouter;
