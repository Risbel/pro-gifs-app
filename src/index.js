import React from "react";
import ReactDOM from "react-dom/client";
//import Sidebar from "./apps/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

//import CounterApp from "./CounterApp";

import "./index.css";
import { App } from "./App";
import { Navbar } from "./components/Navbar";

const divRoot = ReactDOM.createRoot(document.getElementById("root"));

divRoot.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </React.StrictMode>
);

//divRoot.render(<CounterApp value={10} />);
//divRoot.render(<Sidebar />);
