const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "run_log",
  password: "braden",
  port: 5432,
});

module.exports = pool;
