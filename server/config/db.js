const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);//process.env.MONGO_URL allows you to access the MongoDB connection string from an environment variable, promoting better security and flexibility in managing your application's configuration. By using the dotenv module, you can load these environment variables from a .env file, keeping sensitive data out of your source code.
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
//for connecting mongodb this function is used ,the MONGO_URL is fetched from .env file of server side