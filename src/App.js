import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/index.css";
import Preview from "./pages/Preview";
import SandBox from "./pages/SandBox";
import Navbar from "./components/Navbar/Navbar";
import Html from "./pages/Html";
import Css from "./pages/Css";
import JavaScript from "./pages/JavaScript";
import Npm from "./pages/Npm";
import ReactLang from "./pages/ReactLang";
import Node from "./pages/Node";
import Mongodb from "./pages/Mongodb";
function App() {
  const [developer, setDeveloper] = useState({});
  useEffect(() => {
    fetch("data/developer.json")
      .then((res) => res.json())
      .then((data) => {
        setDeveloper(data);
        console.log(data);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Preview data={developer.libraries} />} />
          <Route
            path="/sandbox"
            element={<SandBox data={developer.sandbox} />}
          />
          <Route path="/html" element={<Html data={developer.libraries} />} />
          <Route path="/css" element={<Css data={developer.libraries} />} />
          <Route
            path="/javascript"
            element={<JavaScript data={developer.libraries} />}
          />
          <Route path="/npm" element={<Npm data={developer.libraries} />} />
          <Route
            path="/react"
            element={<ReactLang data={developer.reactlang} />}
          />
          <Route path="/nodejs" element={<Node data={developer.libraries} />} />
          <Route
            path="/mongodb"
            element={<Mongodb data={developer.libraries} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
