import * as dotenv from "dotenv";
dotenv.config();
import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./assets/index.scss";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
