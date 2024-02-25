const Razorpay = require("razorpay");
const crypto = require("crypto");
const { Payment } = require("../models/paymentModal");

const instance = new Razorpay({
  key_id: "rzp_test_mmgwnpxo4XgLkR",
  key_secret: "mLM2ZAdf7hGW1fOfXj6JiqvH",
});
const checkOut = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  console.log(order);
  res.status(200).json({ status: true, order });
};

const verifyPayment = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  console.log(req.body);

  const checkStatus = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZOR_SECRET)
    .update(checkStatus.toString())
    .digest("hex");

  const isValidPayment = expectedSignature === razorpay_signature;

  if (isValidPayment) {
    await Payment.create({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    
    res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({ status: false });
  }
};
module.exports = { checkOut, verifyPayment };
