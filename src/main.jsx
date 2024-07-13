import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Template from "./layouts/Template.jsx";
import { Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Message from "./pages/Message.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<App />} />
          <Route path="/message" element={<Message />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
