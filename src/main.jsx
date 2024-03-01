// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Route, Routes, HashRouter as Router } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AddSchool from "./AddSchool/AddSchool.jsx";
import ShowSchools from "./ShowSchools/ShowSchools.jsx";
import "./index.css";

const routing = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/addschool" element={<AddSchool />} />
      <Route path="/showschools" element={<ShowSchools />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById("root")).render(routing);
//ReactDOM.createRoot(document.getElementById("root")).render(<App />);
