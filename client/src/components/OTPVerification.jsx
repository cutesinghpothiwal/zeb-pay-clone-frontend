import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import mobile from "../utilities/mobile.png";

function OTPVerification() {
  const [input, setInput] = useState("");
  const location = useLocation();
  const { number } = location.state;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return alert("Please enter the correct verification code");
    }
    navigate('/validate-pin', { state: { input } });
  };

  console.log(number);
  const maskNumber = (num) => {
    if (num.length < 10) return num; // In case the number is shorter than 10 digits
    return num.slice(0, -2).replace(/\d/g, "*") + num.slice(-2);
  };

  const maskedNumber = maskNumber(number);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <div className="h-[460px] bg-white w-[500px] rounded-3xl border-2 border-blue-500">
        <div className="w-full">
          <p className="px-6 p-4 border-b font-normal text-md border-gray-200">
            Login To Zebpay
          </p>
        </div>

        <div className="details-container flex flex-col justify-center items-center w-full ">
          <div className="image my-8">
            <img src={mobile} alt="" />
          </div>

          <div className="confirm-container flex-col items-center flex">
            <p className="font-semibold text-[15px]">
              Please enter the verification code sent to
            </p>
            <h1 className="text-3xl">+91 {maskedNumber}</h1>
          </div>
        </div>

        <div className="w-full p-7">
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              className="text-center font-normal py-2 text-[15px] bg-[#E9EFF6] w-full rounded-md"
              placeholder="Enter Verification Code"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />

            <button
              type="submit"
              className="mt-8 bg-blue-500 text-white p-2 font-semibold rounded-lg w-full"
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OTPVerification;
