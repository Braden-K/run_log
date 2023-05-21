const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const addUser =
  "INSERT INTO users (firstname, username, password) VALUES ($1, $2, $3)";
const removeUser = "DELETE FROM users WHERE id = $1";

module.exports = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
};
