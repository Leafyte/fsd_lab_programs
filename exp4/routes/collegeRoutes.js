const express = require("express");
const router = express.Router();
const studentsRoutes = require("./studentRoutes");
const marksRoutes = require("./marksRoutes");
// Student routes
router.use("/students", studentsRoutes);
// Marks routes
router.use("/marks", marksRoutes);
module.exports = router;