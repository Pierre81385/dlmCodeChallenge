import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Details from "../src/pages/Details";
import New from "../src/pages/New";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog/:id" element={<Details />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
};

export default App;
