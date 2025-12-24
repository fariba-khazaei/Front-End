import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/index.css";
import { FavoritesProvider } from "./context/FavoritesProvider";

import { Routes, Route } from "react-router";
import Home from "./views/Home/Home";
import Results from "./views/Results/Results";
import MovieDetails from "./views/MovieDetail/MovieDetails";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </QueryClientProvider>
  </StrictMode>
);
