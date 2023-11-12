const {Router} = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');
const { regiserMiddleware } = require('../middlewares/registerMiddleware');
const { loginMiddleware } = require('../middlewares/loginMiddleware');

const userRouter = Router();

userRouter.post("/register", regiserMiddleware, registerUser);

userRouter.post("/login", loginMiddleware, loginUser);

userRouter.post("/logout", logoutUser);


module.exports = userRouter;