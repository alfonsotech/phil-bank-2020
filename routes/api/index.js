const router = require("express").Router();
const resourcesRoutes = require("./resources");

router.use("/resources", resourcesRoutes);


module.exports = router;
