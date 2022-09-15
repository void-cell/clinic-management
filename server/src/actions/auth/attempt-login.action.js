const { attemptLogin } = require("../../services/auth");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await attemptLogin(email, password);

    const session = req.session;
    session.auth = true;
    session.user = user;

    // return res.status(200).json(user);
    return res.status(200).json({ message: "Logged in with success", session });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
