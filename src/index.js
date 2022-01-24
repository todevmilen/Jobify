import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import { AppProvider } from "./context/appContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
