import { useLocation, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { moviesByGenre, searchMovies } from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import BackButton from "../components/BackButton";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Query params
  const params = new URLSearchParams(location.search);
  const genre = params.get("genre");
  const query = params.get("query");
  const page = Number(params.get("page")) || 1;

  // Decide which API to call
  const fetchMovies = async () => {
    if (genre) {
      return moviesByGenre({ genre, page });
    }
    if (query) {
      return searchMovies({ query, page });
    }
    return null;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies", genre, query, page],
    queryFn: fetchMovies,
    enabled: !!genre || !!query,
    keepPreviousData: true,
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Error state
  if (isError || !data) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        Something went wrong
      </div>
    );
  }

  const movies = data.data || [];
  const totalPages = data.metadata?.page_count || 1;

  return (
    <div className="mx-auto w-101.5 lg:w-230 bg-[#070D23]">
      {/* Back button */}
      <div className="mt-8 mb-8 lg:mt-12.5 flex items-center">
        <BackButton />
        <div className="pr-10 text-white text-center grow">
          <h1 className="font-bold text-[18px] m-0 p-0">Result</h1>
          <span className="opacity-40 font-light text-xs">
            for "{query ? query : genre}"
          </span>
        </div>
      </div>
      <SearchBar />

      {/* Empty state */}
      {movies.length === 0 && (
        <p className="text-center text-white/50 mt-20">No results found</p>
      )}

      {/* Movies grid */}
      <ul>
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            border={index === movies.length - 1 ? false : true}
          />
        ))}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          page={page}
          total={totalPages}
          onChange={(newPage) => {
            const baseQuery = genre ? `genre=${genre}` : `query=${query}`;

            navigate(`/results?${baseQuery}&page=${newPage}`);
          }}
        />
      )}
    </div>
  );
};

export default Results;
