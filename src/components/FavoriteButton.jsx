import { cn } from "../utils/className.js";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const FavoriteButton = ({ movie, buttonClass = "", DetailMobile = false }) => {
  const { favorites, dispatch } = useContext(FavoritesContext);
  const isFav = favorites.some((m) => m.id === movie.id);

  if (!DetailMobile)
    return (
      <button
        className={cn(["cursor-pointer p-2", buttonClass])}
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "TOGGLE", payload: movie });
        }}
      >
        <svg
          viewBox="0 0 24 26"
          className={`
          w-6 h-6
          transition-all duration-200
          stroke-current
          ${
            isFav
              ? "fill-purple-600 text-purple-600"
              : "fill-transparent text-white"
          }
          group-hover:text-purple-600
        `}
          strokeWidth="1.5"
        >
          <path d="M17.5 1.91699C16.374 1.93451 15.2725 2.24885 14.3068 2.82826C13.3411 3.40768 12.5454 4.23166 12 5.21699C11.4546 4.23166 10.6589 3.40768 9.69324 2.82826C8.72754 2.24885 7.62605 1.93451 6.5 1.91699C4.70495 1.99498 3.01371 2.78025 1.79579 4.10122C0.577864 5.4222 -0.0677465 7.17152 4.06709e-06 8.96699C4.06709e-06 13.514 4.786 18.48 8.8 21.847C9.69622 22.6001 10.8294 23.013 12 23.013C13.1706 23.013 14.3038 22.6001 15.2 21.847C19.214 18.48 24 13.514 24 8.96699C24.0678 7.17152 23.4221 5.4222 22.2042 4.10122C20.9863 2.78025 19.2951 1.99498 17.5 1.91699Z" />
        </svg>
      </button>
    );
  return (
    <button
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden max-w-101.5 w-full z-20 py-3 rounded-xl text-[14px] ${
        isFav ? "bg-[#222C4F]" : "bg-[#724CF9]"
      }`}
      onClick={(e) => {
        e.preventDefault();
        dispatch({ type: "TOGGLE", payload: movie });
      }}
    >
      {isFav ? "Remove from Favorite" : "Add to Favorite"}
    </button>
  );
};

export default FavoriteButton;
