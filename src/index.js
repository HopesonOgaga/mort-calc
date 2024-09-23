import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContextProvider from "./context/userContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App></App>
      </UserContextProvider>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
