import React, { useState } from "react";

const Checkout = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative bg-white/20 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/30 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-black text-center mb-6">Secure Checkout</h2>

        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          {["Billing", "Shipping", "Payment"].map((label, index) => (
            <button
              key={index}
              className={`flex-1 text-center py-2 rounded-lg text-sm font-semibold transition-all ${
                step === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setStep(index + 1)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Step 1: Billing Information */}
        {step === 1 && (
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setStep(2)}
              className="w-full p-3 mt-4 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-all"
            >
              Next: Shipping Info →
            </button>
          </div>
        )}

        {/* Step 2: Shipping Information */}
        {step === 2 && (
          <div>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                ← Back to Billing
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
              >
                Next: Payment →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment Information */}
        {step === 3 && (
          <div>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full p-3 mb-3 bg-gray-100 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                ← Back to Shipping
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Complete Order ✔
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;