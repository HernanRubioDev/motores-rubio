const {Router} = require('express');
const { securityMiddleware } = require('../middlewares/securityMiddleware');
const { registerMonophasic, editMonophasic, removeMonophasic, searchMonophasic } = require('../controllers/monophasicController');

const monophasicRouter = Router();

monophasicRouter.get("/get/:username/:auth_token", securityMiddleware, searchMonophasic);

monophasicRouter.post("/new/:username/:auth_token", securityMiddleware, registerMonophasic);

monophasicRouter.patch("/edit/:username/:auth_token", securityMiddleware, editMonophasic);

monophasicRouter.delete("/delete/:username/:auth_token/:id_motor", securityMiddleware, removeMonophasic);

module.exports = monophasicRouter;