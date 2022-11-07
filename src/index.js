import "@splidejs/react-splide/css";
import React from "react";
import ReactDOM from "react-dom/client";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import App from "./App";
import ServicesProvider from "./contexts/ServicesProvider";
import ThemeProvider from "./contexts/ThemeProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ServicesProvider>
        <div className="max-h-screen">
          <PhotoProvider>
            <App />
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
