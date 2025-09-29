import React, { useState, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Payment() {
  useEffect(() => {
    document.title = "WaseLg | Payment";
  }, []);

  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Payment logic here
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: 250000, // 2500 NGN (in kobo)
    publicKey: "pk_test_aa9595381d858c49d21f6378ac51c418418dec90",
  };

  const onClose = () => {
    console.log("Payment dialog closed");
  };

  const onSuccess = (reference) => {
    console.log("Payment successful:", reference);
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <button
        type="button"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Click to Make Payment
      </button>
    );
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-10">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Payment for Certificate of Indigene
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />

            <PaystackHookExample />
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Payment;
