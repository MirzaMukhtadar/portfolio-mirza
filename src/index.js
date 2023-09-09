import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Global.scss";
import "./assets/font-awsome-v6/css/all.css";
import "./assets/font-awsome-v6/css/fontawesome.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
