// src/LoginContainer.js
import React, { useState } from 'react';
import Logo from '../assests/Logo/RSquareSoftLogo.png';

const LoginContainer = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
    console.log("OTP sent");
  };

  const handleSubmitOtp = () => {
    alert('OTP submitted!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex justify-center w-full mb-8">
        <img src={Logo} alt="RSquareSoft" className="w-20 h-auto" />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
          <div className="flex items-center">
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Mobile No."
            />
            <button
              onClick={handleSendOtp}
              className="ml-4 mt-1 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
            >
              Get OTP
            </button>
          </div>
        </div>
        {otpSent && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <button
              onClick={handleSubmitOtp}
              className="mt-4 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginContainer;
