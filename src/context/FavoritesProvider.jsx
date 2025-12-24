import { FavoritesContext } from "./FavoritesContext";
import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return state.some((m) => m.id === action.payload.id)
        ? state.filter((m) => m.id !== action.payload.id)
        : [...state, action.payload];
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state));
  }, [state]);

  return (
    <FavoritesContext value={{ favorites: state, dispatch }}>
      {children}
    </FavoritesContext>
  );
};
