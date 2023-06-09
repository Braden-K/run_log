const getRunByUserId = "SELECT * FROM runs WHERE user_id = $1";
const addRun =
  "INSERT INTO runs (distance, sec_per_mile, avg_hr, user_id) VALUES ($1, $2, $3, $4)";
const deleteRunById = "DELETE FROM runs WHERE run_id = $1";

module.exports = {
  getRunByUserId,
  addRun,
  deleteRunById,
};
