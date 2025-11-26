import { useContext } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";

const SpotifyPlayedSong = () => {
  const { isPlaying, setIsPlaying, selectedSong } = useContext(SpotifyContext);

  const onClickStatus = () => {
    setIsPlaying(!isPlaying);
  };

  if (selectedSong === 0) {
    return <div></div>;
  } else {
    return (
      <div className="bg-gray-600 fixed bottom-0 right-0 left-0 p-4 flex gap-4 justify-around items-center">
        <img
          className="w-20 h-20 rounded"
          src={`public/${selectedSong.id}.jpg`}
          alt=""
        />
        <div className="grow text-left">
          <div>{selectedSong.title}</div>
          <div className="text-gray-400 text-sm pt-2">
            {selectedSong.artist}
          </div>
        </div>

        <button className="p-8" onClick={onClickStatus}>
          {isPlaying ? " ❚❚ " : " ▶︎ "}
        </button>
      </div>
    );
  }
};

export default SpotifyPlayedSong;
