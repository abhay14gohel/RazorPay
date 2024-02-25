const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const router = require("./routes/paymentRouter");
dotenv.config();
const cors = require("cors");
const { connectDB } = require("./config/db");

connectDB()

const instance = new Razorpay({
  key_id: process.env.RAZOR_ID,
  key_secret: process.env.RAZOR_SECRET,
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is Started: ${process.env.PORT}`);
});

module.exports = { instance };
