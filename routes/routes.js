const express = require("express");
const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.send("Hello from the route file!");
});

// Export the router
module.exports = router;