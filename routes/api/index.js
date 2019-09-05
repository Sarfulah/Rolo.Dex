const router = require("express").Router();
const contactRoutes = require("./contact");

// Book routes
router.use("/contact", contactRoutes);

module.exports = router;