import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App className="container" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
