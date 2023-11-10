const {Router} = require('express');
const { securityMiddleware } = require('../middlewares/securityMiddleware');
const { registerTriphasic, editTriphasic, removeTriphasic, searchTriphasic } = require('../controllers/triphasicController');

const triphasicRouter = Router();

triphasicRouter.get("/get/:username/:auth_token", securityMiddleware, searchTriphasic);

triphasicRouter.post("/new/:username/:auth_token", securityMiddleware, registerTriphasic);

triphasicRouter.patch("/edit/:username/:auth_token", securityMiddleware, editTriphasic);

triphasicRouter.delete("/delete/:username/:auth_token", securityMiddleware, removeTriphasic);

module.exports = triphasicRouter;