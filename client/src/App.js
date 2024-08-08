import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mobile from "./components/mobile";
import img from "../src/utilities/logo-white.png";
import OTPVerification from "./components/OTPVerification";
import ValidatePin from "./components/validatePin";


function App() {
  return (
    <div className="wrapper">
      <div className="heading flex justify-center items-center mt-8">
        <img src={img} alt="OOps" />
      </div>

      <Routes>
        <Route exact path="/" element={<Mobile />} />
        <Route exact path="/otp-verification" element={<OTPVerification />} />
        <Route exact path="/validate-pin" element={<ValidatePin />} />
      </Routes>

      
    </div>
  );
}

export default App;
