import React from "react";
import { useLocation } from "react-router-dom";

export const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("reference");

  
  return <div>
  <h1>Payment Completed</h1>
  <p>
    {paramValue}
  </p></div>;
};
