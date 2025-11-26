import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import Spotify from "./views/Spotify.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Spotify />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
