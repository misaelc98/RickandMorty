const data = require("../utils/data");

function login(req, res) {
  const { email, password } = req.query;

  return data.some(
    (user) => user.email === email && user.password === password
  )
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false });
}

module.exports = login;
