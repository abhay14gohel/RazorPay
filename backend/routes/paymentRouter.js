const express = require("express");
const { checkOut, verifyPayment } = require("../controllers/paymentController");

const router = express.Router();
router.route("/getKey").get(async(req,res)=>{
    res.status(200).json({ key: "rzp_test_mmgwnpxo4XgLkR" });
})
router.route("/checkout").post(checkOut)
router.route("/verifyPayment").post(verifyPayment);

module.exports = router;
