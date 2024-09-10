const express = require("express");
const db = require("../db/conn.mjs");

const router = express.Router();
console.log(db)
// Define a route
// router.get("/", async (req, res) => {
//   let collection = await db.collection("post")
//   let resulte = await collection.find({}).limit(50).toArray();
//   res.send(resulte).status(200);
// });

// Export the router
module.exports = router;