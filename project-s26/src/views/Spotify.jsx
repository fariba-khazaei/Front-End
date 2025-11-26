import SpotifyList from "../components/Spotify/SpotifyList";
import SpotifyPlayedSong from "../components/Spotify/SpotifyPlayedSong";
import { SpotifyProvider } from "../context/SpotifyContext";

const Spotify = () => {
  return (
    <div className="bg-black text-white pb-32">
      <SpotifyProvider>
        <SpotifyList></SpotifyList>
        <SpotifyPlayedSong></SpotifyPlayedSong>
      </SpotifyProvider>
    </div>
  );
};

export default Spotify;
