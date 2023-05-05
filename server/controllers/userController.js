const pool = require("../db.js");
const queries = require("../userQueries.js");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { firstname, username, password } = req.body;

  pool.query(queries.checkUsernameExists, [username], (error, results) => {
    if (results.rows.length) {
      res.send("Username already exists");
    }

    pool.query(
      queries.addUser,
      [firstname, username, password],
      (error, results) => {
        if (error) throw error;
        res.status(201).send("User created");
        console.log("User created");
      }
    );
  });
};

const removeUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (error, results) => {
    if (!results.rows.length) res.send("User does not exist");

    pool.query(queries.removeUser, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("User removed");
    });
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
};
