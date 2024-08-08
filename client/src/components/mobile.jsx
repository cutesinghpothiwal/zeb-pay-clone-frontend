import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

export default function Mobile() {
  const captchaRef = useRef();
  const [number, setNumber] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!number){
      alert("Please Enter A Valid Mobile Number ")
    }

    const captchaValue = captchaRef.current.getValue();
    if (!captchaValue) {
      alert("Please complete the CAPTCHA");
      return;
    }

    // For now, just log the captcha value
    console.log("CAPTCHA value:", captchaValue);
    alert("CAPTCHA verified successfully. Proceeding with form submission...");

    navigate("/otp-verification" , {state : {number}})
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <div className="container h-[440px] bg-white w-[500px] rounded-3xl border-2 border-blue-500">
        <div className="w-full">
          <p className="px-6 p-4 border-b font-normal text-md border-gray-200">
            Login To Zebpay
          </p>
        </div>
        <div className="user flex flex-col items-center">
          <div className="text-center items-center w-[350px] mt-7">
            <p className="font-semibold">
              Zebpay will send a One time SMS to verify your phone number
            </p>
          </div>
          <div className="form w-full p-9">
            <form onSubmit={handleSubmit}>
              <div className="selectors bg-[#E9EFF6]  rounded-lg flex">
                <select name="" className="bg-[#E9EFF6] px-2 rounded-md" id="">
                  <option value="us">USA (+1)</option>
                  <option value="ca">CAN (+1)</option>
                  <option value="in">IN (+91)</option>
                  <option value="gb">UK (+44)</option>
                </select>
                <div className="w-full h-full">
                  <input
                    type="text"
                    className="text-center font-normal text-[15px] py-2  rounded-md bg-[#E9EFF6] w-full"
                    placeholder="Mobile no."
                    onChange={(e)=> setNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-7 flex justify-center ">
                <ReCAPTCHA
                  sitekey="6LdJsxsqAAAAAJLJu5g_JlKfX7XPXNfZwunkRVwk" // Replace with your site key
                  ref={captchaRef}
                />
              </div>
              <button
                type="submit"
                className="mt-8 bg-blue-500 text-white p-2 font-semibold rounded w-full"
                onClick={handleSubmit}
              >
                CONTINUE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
