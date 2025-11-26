import { useContext } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";
import songs from "../../utils/songs";

const SpotifyList = () => {
  const { isPlaying, setIsPlaying, setSelectedSong } =
    useContext(SpotifyContext);

  const onClickSong = (song) => {
    setIsPlaying(!isPlaying);
    setSelectedSong(song);
  };

  return (
    <div>
      <ul>
        {songs.map((song) => {
          return (
            <li
              className=" p-2 border-t-2 border-gray-300 flex gap-4 "
              key={song.id}
            >
              <img
                className="w-20 h-20 rounded"
                src={`public/${song.id}.jpg`}
                alt=""
              />
              <div>
                <button onClick={() => onClickSong(song)}>{song.title}</button>
                <div className="text-gray-400 text-sm pt-2">{song.artist}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpotifyList;
