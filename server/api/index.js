const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
const listingRouter = require("./routes/listing.route.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors({ 
  origin: process.env.FRONTEND_URL, 
  credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => console.log("Server is running on port 3000"));
}

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

module.exports = app;
