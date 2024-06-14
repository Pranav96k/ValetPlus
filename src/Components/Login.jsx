import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginPageImage from '../assests/images/LoginPageImage.png';
import Logo from '../assests/Logo/RSquareSoftLogo.png';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds timer

  // Function to start the timer
  const startTimer = () => {
    setTimeLeft(120); // Reset timer to 120 seconds
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear interval when component unmounts or OTP is submitted
    return () => clearInterval(timer);
  };

  // Effect to start timer when otpSent becomes true
  useEffect(() => {
    if (otpSent) {
      startTimer();
    }
  }, [otpSent]);

  // Function to handle sending OTP
  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/otp/send', {
        phoneNumber: mobileNumber,
      });

      if (response.status === 201 && response.data.status === "success") {
        setOtpSent(true);
        setErrorMessage('');
        setSuccessMessage('OTP sent successfully');
        console.log(`OTP has been sent to ${mobileNumber}`);
      } else {
        throw new Error(response.data.message || 'Failed to send OTP. Please try again.');
      }
    } catch (error) {
      if (!error.response || error.response.status !== 201) {
        setErrorMessage(error.message);
        setSuccessMessage('');
        console.error('Error sending OTP:', error.response ? error.response.data : error.message);
      }
    }
  };

  // Function to handle OTP submission
  const handleSubmitOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/otp/validate', {
        phoneNumber: mobileNumber,
        otp: otp,
      });

      if (response.status === 201 && response.data.status === "success") {
        alert('OTP submitted successfully!');
        setErrorMessage('');
        setSuccessMessage('');
        setTimeLeft(0); // Stop the timer
      } else {
        throw new Error(response.data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
      console.error('Error validating OTP:', error.response ? error.response.data : error.message);
    }
  };

  // Function to handle Resend OTP button click
  const handleResendOtp = async () => {
    // Reset OTP fields
    setOtp('');
    setTimeLeft(120); // Reset timer to 120 seconds
    // Call handleSendOtp function to resend OTP
    await handleSendOtp();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-blue">
      <div className="relative bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row w-full max-w-4xl">
        <div className="absolute top-0 left-0 p-4">
          <img src={Logo} alt="RSquareSoft" className="w-20 h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-8 pt-16">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Log In</h2>
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mobile No.</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Mobile No."
            />
            <button
              onClick={handleSendOtp}
              className="mt-4 w-full bg-dark-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
            >
              Get OTP
            </button>
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
              <div className="flex flex-col items-center mt-2">
                <div className="flex justify-between w-full">
                  <span className="text-sm text-gray-500">
                    {timeLeft > 0 ? `OTP expires in ${timeLeft} seconds` : 'OTP expired'}
                  </span>
                  {timeLeft <= 0 && (
                    <button onClick={handleResendOtp} className='text-sm text-red-500'>Resend OTP</button>
                  )}
                </div>
                {timeLeft > 0 && (
                  <button
                    onClick={handleSubmitOtp}
                    className="mt-4 w-full bg-dark-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={LoginPageImage} alt="ValetPlus" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
