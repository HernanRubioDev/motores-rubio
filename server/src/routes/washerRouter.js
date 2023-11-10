const {Router} = require('express');
const { securityMiddleware } = require('../middlewares/securityMiddleware');
const { registerWasher, editWasher, removeWasher, searchWasher } = require('../controllers/washerController');

const washerRouter = Router();

washerRouter.get("/get/:username/:auth_token", securityMiddleware, searchWasher);

washerRouter.post("/new/:username/:auth_token", securityMiddleware, registerWasher);

washerRouter.patch("/edit/:username/:auth_token", securityMiddleware, editWasher);

washerRouter.delete("/delete/:username/:auth_token", securityMiddleware, removeWasher);

module.exports = washerRouter;