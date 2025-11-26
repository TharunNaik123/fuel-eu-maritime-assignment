const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("fuel.db", (err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

module.exports = db;
