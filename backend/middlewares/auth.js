const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");
const { JWT_SECRET } = require("../config");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnauthorizedError("Необходима авторизация"));
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(
      token,
      process.env.NODE_ENV !== "production" ? JWT_SECRET : "app-secret"
    );
  } catch (err) {
    return next(new UnauthorizedError("Необходима авторизация"));
  }

  req.user = payload;

  return next();
};

module.exports = auth;
