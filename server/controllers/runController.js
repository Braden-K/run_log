const { ConstructionOutlined } = require("@mui/icons-material");
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
      console.log("Run created");
    }
  );
};

const deleteRunById = (req, res) => {
  const id = req.params.id;
  pool.query(queries.deleteRunById, [id], (error, results) => {
    if (error) throw error;
    console.log("Run deleted");
  });
};

module.exports = {
  getRunByUserId,
  addRun,
  deleteRunById,
};
