const userModel = require("../models/userModel");
module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);
    //check admin
    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "AUth Fialed",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Auth Failed, ADMIN API",
      errro,
    });
  }
};
//authorization
//The middleware function checks if a user has admin privileges based on their role.
//It uses userId from the request body to find the user in the database.
//If the user is not an admin, it responds with a 401 status and an error message.
//If the user is an admin, it calls next() to pass control to the next middleware or route handler.
//Any errors during the process result in a 401 response and an error message.
//This middleware ensures that only users with admin privileges can access certain routes or perform specific actions.