const router = require("express").Router();
const contactController = require("../../controllers/contactController");

router.route("/")
  .get(contactController.findAll)
  .post(contactController.create);

router.route("/:id")
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;