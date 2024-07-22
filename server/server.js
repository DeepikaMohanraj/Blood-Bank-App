const express = require("express");
const dotenv = require("dotenv");//dotenv is to hide sensitive information
const colors = require("colors");
const morgan = require("morgan");//to log the request received by the server
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
// Load environment variables from .env file
//dotenv is a zero-dependency module that loads environment variables from a .env file into process.env in Node.js. It helps manage environment-specific configurations, such as database connection strings, API keys, and other sensitive information, without hardcoding them into your source code.
//dotenv.config() reads the .env file and loads its contents into process.env.
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();//express functionalities stores in app variable

//middlewares
app.use(express.json());//vara req la  irunthu json data va parse pandrom
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
//app.listen(PORT, callback) starts 
//the server and listens for incoming 
//connections on the specified port.
//CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control how resources are shared between different origins. An origin is defined by the combination of a scheme (protocol), host (domain), and port. CORS is used to allow or restrict requests made from one origin to another, typically used in web applications to enable secure access to resources on different domains.
