const {Router} = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');
const { regiserMiddleware } = require('../middlewares/registerMiddleware');

const userRouter = Router();

userRouter.post("/register", regiserMiddleware, registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/logout", logoutUser);


module.exports = userRouter;