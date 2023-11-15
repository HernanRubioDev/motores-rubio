const {Router} = require('express');
const { securityMiddleware } = require('../middlewares/securityMiddleware');
const { registerMonophasic, editMonophasic, removeMonophasic, searchMonophasic } = require('../controllers/monophasicController');
const { editMiddleware } = require('../middlewares/editMiddleware');

const monophasicRouter = Router();

monophasicRouter.get("/get/:username/:auth_token", securityMiddleware, searchMonophasic);

monophasicRouter.post("/new/:username/:auth_token", securityMiddleware, registerMonophasic);

monophasicRouter.patch("/edit/:username/:auth_token", securityMiddleware, editMiddleware, editMonophasic);

monophasicRouter.delete("/delete/:username/:auth_token/:id_motor", securityMiddleware, removeMonophasic);

module.exports = monophasicRouter;