const router = require("express").Router();
const resourceController = require("../../controllers/resourceController");

// Matches with "/api/resources"
router.route("/")
  .get(resourceController.findAll)
  .post(resourceController.create);

//Get trending Topics
router.route("/trending")
  .get(resourceController.findTrending)
//Get new Topics
router.route("/new")
    .get(resourceController.findNew)

// Matches with "/api/resources/:id"
router
  .route("/:id")
  .get(resourceController.findById)
  .put(resourceController.update)
  .delete(resourceController.remove)

module.exports = router;
