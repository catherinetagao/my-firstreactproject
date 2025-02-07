import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./layouts/Template.jsx";
import Project from "./pages/Project.jsx";
import Message from "./pages/Message.jsx";
import MainTemplate from "./layouts/MainTemplate.jsx";
import Template1 from "./layouts/Template1.jsx";

// Create root element and render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* MainTemplate serves as the top-level layout */}
        <Route element={<MainTemplate />}>
          <Route element={<Template />}>
            <Route path="/" element={<App />} />
            <Route path="/project" element={<Project />} />
          </Route>
          <Route element={<Template1 />}>
            <Route path="/message" element={<Message />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
