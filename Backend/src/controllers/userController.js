const { users } = require("../Data/users.js");

function signup(req, res) {
  const { userName, pass } = req?.body;

  const user = users.filter((user) => user.userName == userName);

  if (!user) {
    users.push({ userName: userName, pass: pass });
    res.status(200).json({
      Success: "Creating new user",
    });
  }
  res.status(200).json({
    Warning: "User Already Exist!",
  });
}

module.exports = {
  signup,
};
