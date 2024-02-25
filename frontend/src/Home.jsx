import React from "react";
import axios from "axios";

export const Home = () => {
  const handleCkeckOut = async () => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:5000/api/getKey");
      const amount = 100;

      const {
        data: { order },
      } = await axios.post("http://localhost:5000/api/checkout", {
        amount,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name:"DigiFarm",
        description: "Complete payment",
        image:
          "https://res.cloudinary.com/ddao02zyw/image/upload/v1708774359/kisan_gvq9ja.jpg",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "http://localhost:5000/api/verifyPayment",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "DigiFarm -Rajkot ",
        },
        theme: {
          color: "#16262A",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleCkeckOut}>click</button>
    </div>
  );
};
