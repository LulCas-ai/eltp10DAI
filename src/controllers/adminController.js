const { users } = require("../data/db");

function listUsers(req, res) {
  users  = req.body;
  return res.status(200).json({
    total: users.length,
    users
  });
}

module.exports = {
  listUsers
};
