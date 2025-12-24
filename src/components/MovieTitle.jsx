import { nanoid } from "nanoid";
import { cn } from "../utils/className";
import FavoriteButton from "./FavoriteButton";

const MovieTitle = ({ movie, h2Font, buttonClass = "" }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className={cn(["font-bold text-white grow", h2Font])}>
          {movie.title}
        </h2>
        <FavoriteButton movie={movie} buttonClass={buttonClass} />
      </div>
      {movie.genres?.map((genre, index) => (
        <span
          key={nanoid()}
          className="opacity-40 font-light text-white text-xs"
        >
          {genre} {index < movie.genres.length - 1 ? "," : ""}
        </span>
      ))}
    </div>
  );
};

export default MovieTitle;
