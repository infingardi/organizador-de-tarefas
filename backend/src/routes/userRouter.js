const { Router } = require('express');
const controller = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/signup', controller.createUser);
userRouter.post('/login', controller.loginUser);

module.exports = userRouter;
