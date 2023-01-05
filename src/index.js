import React from "react";
import ReactDOM from "react-dom/client";
//import Sidebar from "./apps/Sidebar";
import GifExpertApp from "./GifExpertApp";

//import CounterApp from "./CounterApp";

import "./index.css";

const divRoot = ReactDOM.createRoot(document.getElementById("root"));

divRoot.render(<GifExpertApp />);

//divRoot.render(<CounterApp value={10} />);
//divRoot.render(<Sidebar />);
