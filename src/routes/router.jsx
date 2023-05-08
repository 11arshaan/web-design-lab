import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorRoute from "./ErrorRoute";
import UIRoute from "./UIRoute";
import UtilityRoute from "./UtilityRoute";
import CreativeRoute from "./CreativeRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      { path: "ui", element: <UIRoute /> },
      { path: "creative", element: <CreativeRoute /> },
      { path: "utility", element: <UtilityRoute /> },
    ],
  },
]);



export default router;