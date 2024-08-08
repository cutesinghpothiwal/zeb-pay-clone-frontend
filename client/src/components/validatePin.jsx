import React, { useState } from "react";
import image from "../utilities/success.png";
import { Link, useNavigate } from "react-router-dom";

function ValidatePin() {
  const [input, setInput] = useState(["", "", "", ""]);
  const navigate= useNavigate()

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newInput = [...input];
      newInput[index] = value;
      setInput(newInput);
    }
  };

  const handleKeyDown = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the input values
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] my-7">
      <div className="h-auto bg-white w-[500px] rounded-3xl border-2 border-blue-500">
        <div className="w-full">
          <p className="px-6 p-4 border-b font-normal text-md border-gray-200">
            Login To Zebpay
          </p>
        </div>

        <div className="details-container flex flex-col justify-center items-center w-full ">
          <div className="image my-7">
            <img src={image} alt="" />
          </div>

          <div className="confirm-container flex-col items-center flex">
            <p className="text-[15px] my-1">Mobile No. verified</p>
            <h1 className="text-2xl">+91 XXXX-XXXXXX</h1>
          </div>
        </div>

        <div className="w-full p-7 flex flex-col justify-center items-center">
          <p className="my-2 text-[15px] font-semibold">Enter 4 Digit PIN</p>
          <form onSubmit={handleSubmit} className="w-full ">
            <div className="input-container flex gap-2 justify-center items-center">
              {input.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  className="text-center font-bold py-[14px] text-[15px] bg-[#E9EFF6] w-[54px] rounded-lg"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={handleKeyDown}
                />
              ))}
            </div>

            <div className="flex items-center justify-center mt-9">
              <p className="text-gray-400 text-sm text-center w-[80%]">
                Please do not share your PIN with anyone including people from Zebpay
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 bg-blue-500 text-white p-2 font-semibold rounded-lg w-full"
            >
              LOGIN
            </button>

            <div className="flex justify-center mt-5">
              <Link to="#" className="text-blue-500 font-bold">
                FORGOT PIN
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ValidatePin;
