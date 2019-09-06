const router = require('express').Router();
const userRoutes = require('./users');
const contactRoutes = require('./contact');

router.use("/users", userRoutes);
router.use("/contact", contactRoutes);

module.exports = router;