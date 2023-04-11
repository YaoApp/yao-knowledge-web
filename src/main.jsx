import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Search from "./routes/search";
import Chat from "./routes/chat";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <ErrorPage /> },
  { path: "/search", element: <Search />, errorElement: <ErrorPage /> },
  { path: "/chat", element: <Chat />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
