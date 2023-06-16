import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./Error404";
import Home from "./Home/Home";
import Main from "./Layout/Main";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./Providers/AuthProvider";
import Instructors from "./Components/Instructors/Instructors";
import Classes from "./Components/Classes/Classes";
import Dashboard from "./Components/Dashboard/userDashboard/userDashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import InstructorDashboard from "./Components/Dashboard/InstructorDashboard/InstructorDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard";
import AddAClass from "./Components/Dashboard/InstructorDashboard/addAClass";
import MyAddedClass from "./Components/Dashboard/InstructorDashboard/MyAddedClass";
import Payment from "./Components/Dashboard/userDashboard/Payment";
import PaymentHistory from "./Components/Dashboard/userDashboard/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
   
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/myPayment",
        element:<Payment></Payment>,
      },
      {
        path: "/paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "/instructorDashboard",
        element: <PrivateRoute><InstructorDashboard></InstructorDashboard></PrivateRoute>,
      },
      {
        path: "/AddAClass",
        element:<AddAClass></AddAClass>
      },
      {
        path: "/MyAddedClass",
        element:<MyAddedClass></MyAddedClass>
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/adminDashboard",
        element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
