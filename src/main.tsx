/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./pages/ErrorBoundary/ErrorBoundary.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ToastContainer />
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
