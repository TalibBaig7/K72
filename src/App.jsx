import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Agence from "./pages/Agence.jsx";
import Projects from "./pages/Projects.jsx";

import FullScreenNav from "./Components/Navigation/FullScreenNav.jsx";
import NavContext from "./context/NavContext.jsx";
import { NavBar } from "./Components/Navigation/NavBar.jsx";

const App = () => {
  return (
    <div className=" overflow-hidden">
      <NavContext>
        <NavBar />
        <FullScreenNav />
        {/* rest of your app */}
      </NavContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
