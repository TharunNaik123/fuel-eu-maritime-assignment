const express = require("express");
const router = express.Router();
const db = require("./db");
const { compareRoutes } = require("./calculate");

router.get("/routes", (req, res) => {
  db.all("SELECT * FROM fuel_routes", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

router.post("/compare", (req, res) => {
  const data = req.body;
  const result = compareRoutes(data);
  res.json(result);
});

module.exports = router;
