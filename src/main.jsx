import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NetflixInHeaderComponent from "./Components/NetflixIn/NetflixIn.jsx";
import RegisterComponent from "./Components/Register/Register.jsx";
import HomeComponent from "./Components/Home/Home.jsx";
import { Login } from "./Components/login/Login.jsx";
import ProtectedRoutes from "./Services/ProtectedRoutes.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NetflixInHeaderComponent />,
  },
  {
    path: "/register",
    element: <RegisterComponent />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [ 
      {
        path: "/home",
        element: <HomeComponent />,
      },
    ],
  },
  
  // {
  //   path: "/Home",
  //   element: <HomeComponent />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
