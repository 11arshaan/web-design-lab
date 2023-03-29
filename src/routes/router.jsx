import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorRoute from "./ErrorRoute";
import { SVGRoute } from "./SVGRoute";
import WebGLRoute from "./WebGLRoute";
import CSSRoute from "./CSSRoute";
import UtilityRoute from "./UtilityRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      { path: "css", element: <CSSRoute /> },
      { path: "utility", element: <UtilityRoute /> },
      { path: "svg", element: <SVGRoute /> },
      { path: "webgl", element: <WebGLRoute /> },
    ],
  },
]);



export default router;