// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App"
import Home from "./Components/Home";
import Login from "./Components/Login";
import View from "./Components/View";
import CustomerOnboarding from "./Components/CustomerOnboarding";
import CustomerInformationFormPage1 from "./Components/CustomerInformationPage1";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/view", // Note the parameter here
        element: <View />,
      },
      {
        path: "/customeronboarding", // Note the parameter here
        element: <CustomerOnboarding />,
      },{
        path: "/customerinformationformpage1", // Note the parameter here
        element: <CustomerInformationFormPage1 />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
