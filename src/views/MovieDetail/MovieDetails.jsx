import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../hooks/useFetch";
import BackButton from "../../components/BackButton";
import RatingCircle from "../../components/RatingCircle";
import MovieTitle from "../../components/MovieTitle";
import FavoriteButton from "../../components/FavoriteButton";
import { nanoid } from "nanoid";

import style from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { id } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div className={style.loadingState}>Loading...</div>;
  }

  // Error state
  if (isError || !movie) {
    return <div className={style.loadingState}>Something went wrong</div>;
  }

  const metaData = [
    { label: "rate", value: movie.rated },
    { label: "year", value: movie.year },
    { label: "time", value: movie.runtime },
  ];

  const detailsData = [
    { label: "Directors", value: movie.director },
    { label: "Writers", value: movie.writer },
    { label: "Actors", value: movie.actors },
    { label: "Country", value: movie.country },
    { label: "Language", value: movie.language },
    { label: "Awards", value: movie.awards },
  ];

  if (!movie) return null;
  return (
    <div className={style.movieContainer}>
      {/* Background (image + gradient) */}

      <div
        className={style.posterBack}
        style={{
          background: `linear-gradient(180deg, rgba(7, 13, 35, 0) 0%, rgba(7, 13, 35, 0.7) 28.5%, rgba(7, 13, 35, 0.9) 60%, #070D23 99%), url(${movie.images})`,
        }}
      />

      {/* Container */}
      <div className="mx-auto max-w-101.5 lg:max-w-230">
        <div className="relative z-5 pt-8 mb-25 lg:pt-12.5">
          <BackButton />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Layout */}
          <div className={style.layoutContent}>
            {/* left side poster + rating*/}
            <div className={style.posterRateContainer}>
              {/* Rating */}
              <div className={style.rateContainer}>
                <div className="flex items-center gap-4.5">
                  <RatingCircle value={movie.imdb_rating} />
                  <div className="text-white">
                    <span className="block font-bold text-[18px] opacity-80">
                      {movie.imdb_votes}
                    </span>
                    <span className="block opacity-60 text-[14px]">
                      ratings on IMDB
                    </span>
                  </div>
                </div>
                {/* Rotten and Metacritic */}
                <div className="text-[13px] opacity-50 leading-6">
                  <span className="block">
                    {JSON.parse(movie.ratings)[1].Value} on Rotten Tomatoes
                  </span>
                  <span className="block">
                    {movie.metascore}/100 on Metacritic
                  </span>
                </div>
              </div>
              <img
                src={movie.poster}
                alt={movie.title}
                className={style.poster}
              />
            </div>

            {/* Right Side (Info+detail) */}
            <div className="order-1 lg:order-2 flex flex-col gap-4.5">
              {/* Title + Fav */}
              <MovieTitle
                movie={movie}
                h2Font={"text-[48px]"}
                buttonClass={"hidden lg:block"}
              />

              {/* Description */}
              <p className={style.descriptionMovie}>{movie.plot}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-xs">
                {metaData.map((mD) => (
                  <span key={nanoid()} className={style.metaData}>
                    {mD.label === "time" ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_378)">
                          <path
                            d="M6 12C2.6915 12 0 9.3085 0 6C0 2.6915 2.6915 0 6 0C9.3085 0 12 2.6915 12 6C12 9.3085 9.3085 12 6 12ZM6 1C3.243 1 1 3.243 1 6C1 8.757 3.243 11 6 11C8.757 11 11 8.757 11 6C11 3.243 8.757 1 6 1ZM6.25 6.433L7.982 5.433C8.2215 5.295 8.303 4.989 8.165 4.75C8.0265 4.5105 7.7205 4.428 7.482 4.567L6.5 5.134V3C6.5 2.7235 6.276 2.5 6 2.5C5.724 2.5 5.5 2.7235 5.5 3V6C5.5 6.1785 5.595 6.344 5.75 6.433C5.8275 6.4775 5.9135 6.5 6 6.5C6.0865 6.5 6.1725 6.4775 6.25 6.433Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_378">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      ""
                    )}
                    {mD.value}
                  </span>
                ))}
              </div>
            </div>
            {/* Details */}
            <div className={style.detailsContainer}>
              <h2 className="font-bold text-[28px] leading-12.5 mb-1.5">
                Details
              </h2>
              {detailsData.map((dD, index) => (
                <div
                  className={`py-3 flex items-center ${
                    index === detailsData.length - 1
                      ? ""
                      : "border-b border-[#222C4F]"
                  }`}
                >
                  <span className={style.detailLabel}>{dD.label}</span>
                  <span className={style.detailValue}>{dD.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile fixed action */}
        <FavoriteButton movie={movie} DetailMobile={true} />
      </div>
    </div>
  );
};

export default MovieDetails;
