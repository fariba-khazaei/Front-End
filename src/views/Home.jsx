import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [showMore, setShowMore] = useState(true);

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    keepPreviousData: true,
  });

  return (
    <div className="mx-auto max-w-101.5 lg:max-w-230 bg-[#070D23] h-screen">
      <h1 className="mt-76 lg:mt-56 lg:text-[140px] text-white font-black align-middle text-[100px] leading-none text-center">
        IAMDb
      </h1>

      {/* Search */}
      <SearchBar className="w-full max-w-2xl mb-10" />

      {/* Genres */}
      <div className="px-5 lg:px-25 flex gap-2.5 flex-wrap justify-center">
        <ul className="flex gap-2.5 flex-wrap justify-center">
          {(showMore ? genres?.slice(0, 4) : genres)?.map((genre) => {
            return (
              <li
                className="bg-[#222C4F] rounded-lg font-normal text-xs text-white py-1.5 px-3"
                key={genre.id}
              >
                <Link to={`/results?genre=${genre.name}&page=1`}>
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setShowMore(!showMore)}
          className="cursor-pointer bg-[#222C4F] text-xs text-white py-1.5 px-3 rounded-lg"
        >
          {showMore ? (
            <span>
              Show More<span className="pl-1.5"> ❯ </span>
            </span>
          ) : (
            <span>
              ❮ <span className="pl-1.5"> Show Less</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
