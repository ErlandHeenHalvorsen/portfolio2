// App.jsx
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import JsFrameworks from "./pages/JsFrameworks.jsx";
import ProjectExam2 from "./pages/ProjectExam2.jsx";
import SemesterProject2 from "./pages/SemesterProject2.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/JsFrameworks" element={<JsFrameworks />} />
        <Route path="/ProjectExam2" element={<ProjectExam2 />} />
        <Route path="/SemesterProject2" element={<SemesterProject2 />} />
      </Route>
    </Routes>
  );
}

export default App;
