import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PaymentSuccess } from "./PaymentSuccess";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />

      {/* /paymentsuccess */}
    </Routes>
  );
}

export default App;
