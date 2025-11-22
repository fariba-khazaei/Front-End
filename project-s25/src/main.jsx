import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Rocket from "./views/Rockets.jsx";
import ShowRocket from "./views/ShowRocket.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/:id" element={<ShowRocket />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
