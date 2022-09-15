const allowedPaths = ["/auth/login", "/auth/recover"];

const verifyAuth = async (req, res, next) => {
  const session = req.session;
  const url = req.url;

  // if (!allowedPaths.includes(url) && !session.auth) {
  //   return res.redirect("/auth/login");
  // }

  res.locals.user = session.user;
  return next();
};

module.exports = { verifyAuth };
