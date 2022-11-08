import "@splidejs/react-splide/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import RefreshProvider from "./contexts/RefreshProvider";
import ServicesProvider from "./contexts/ServicesProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ServicesProvider>
        <div className="min-h-screen dark:bg-slate-900">
          <PhotoProvider>
            <ToastContainer />
            <AuthProvider>
              <HelmetProvider context={helmetContext}>
                <RefreshProvider>
                  <App />
                </RefreshProvider>
              </HelmetProvider>
            </AuthProvider>
          </PhotoProvider>
        </div>
      </ServicesProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
