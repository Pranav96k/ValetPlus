import React from "react";
import CustomerOnboarding from "./Components/CustomerOnboarding";
import CustomerInformationFormPage2 from "./Components/CustomerInformationPage2";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const App = () => {
  return (
    // <div>
    //   {/* <Home/> */}
    //   {/* <Navbar/> */}
    //   {/* <Login /> */}
    //   {/* <CustomerOnboarding/> */}
    //   {/* <CustomerInformationFormPage1/> */}
    //   {/* <CustomerInformationFormPage2/> */}
    // </div>
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
