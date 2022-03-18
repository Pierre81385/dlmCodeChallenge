import { FC, useEffect, useState } from "react";

import { client } from "./client";
import "./styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
