const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};
// vara request la authorization header iruka nu pakum
//The middleware function extracts the JWT from the Authorization header.
//It verifies the token using the secret key.
//If verification fails, it responds with a 401 status and an error message.
//If verification succeeds, it attaches the user ID from the token payload to the request body.
//Any other errors during the process result in a 401 response and an error message.
//This middleware ensures that only authenticated users can proceed to the subsequent middleware or route handlers.
