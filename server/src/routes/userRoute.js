const {Router} = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/userController');
const { regiserMiddleware } = require('../middlewares/registerMiddleware');
const { loginMiddleware } = require('../middlewares/loginMiddleware');
const { securityMiddleware } = require('../middlewares/securityMiddleware');

const userRouter = Router();

userRouter.post("/register", regiserMiddleware, registerUser);

userRouter.post("/login", loginMiddleware, loginUser);

userRouter.patch("/logout/:username/:auth_token", securityMiddleware, logoutUser);


module.exports = userRouter;