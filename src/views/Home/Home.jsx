import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../hooks/useFetch";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import { Link } from "react-router";

import style from "./Home.module.css";

const Home = () => {
  const [showMore, setShowMore] = useState(true);

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    keepPreviousData: true,
  });

  return (
    <div className={style.container}>
      <h1 className={style.title}>IAMDb</h1>

      {/* Search */}
      <SearchBar className="w-full max-w-2xl mb-10" />

      {/* Genres */}
      <div className={style.genres_Container}>
        <ul className="flex gap-2.5 flex-wrap justify-center">
          {(showMore ? genres?.slice(0, 4) : genres)?.map((genre) => {
            return (
              <li className={style.genres} key={genre.id}>
                <Link to={`/results?genre=${genre.name}&page=1`}>
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setShowMore(!showMore)}
          className={style.showMoreBtn}
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
