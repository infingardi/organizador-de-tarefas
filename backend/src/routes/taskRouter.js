const { Router } = require('express');
const authToken = require('../middlewares/authToken');
const controller = require('../controllers/taskController');

const taskRouter = Router();

taskRouter.get('/tasks', authToken, controller.getAllTasks);
taskRouter.get('/tasks/:id', authToken, controller.getTaskById);
taskRouter.post('/tasks', authToken, controller.createTask);
taskRouter.put('/tasks/:id', authToken, controller.updateTask);
taskRouter.delete('/tasks/:id', authToken, controller.deleteTask);

module.exports = taskRouter;
