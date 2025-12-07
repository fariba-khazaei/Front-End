import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router";

import "./assets/index.css";
import Debouncing from "./views/Debouncing";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Debouncing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
