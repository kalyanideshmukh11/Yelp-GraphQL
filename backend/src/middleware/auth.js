const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, context, next) => {
  const token = req.cookies.token;
  if (!token) {
    req.isAuth = false;
    return next();
  }
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
	decodedToken = jwt.verify(token, config.JWTPASSWORD);
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.user = decodedToken.user;
  next();
};