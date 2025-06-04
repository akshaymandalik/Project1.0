
const users = require("../Data/users");

function signup(req, res) {
  const { userName, pass } = req?.body;
  let isUser = false;
  users.filter((user) => {
    if (userName === user.userName) isUser == true;
  });

  if(!isUser){
    users.push({"userName":userName,"pass":pass});
    res.status(200).json({
        "Success":"Creating new user"
    });
  }
  res.status(200).json({
        "Warning":"User Already Exist!"
    });
  
}

module.exports = {
  signup,
};
