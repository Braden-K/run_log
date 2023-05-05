const pool = require("../db.js");
const queries = require("../runQueries.js");

const getRunByUserId = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getRunByUserId, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addRun = (req, res) => {
  const { distance, sec_per_mile, avg_hr, user_id } = req.body;

  pool.query(
    queries.addRun,
    [distance, sec_per_mile, avg_hr, user_id],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Run created");
      console.log("Run created");
    }
  );
};

module.exports = {
  getRunByUserId,
  addRun,
};
