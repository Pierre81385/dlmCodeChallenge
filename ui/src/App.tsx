import { FC, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { client } from "./client";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import Details from "../src/pages/Details";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
