import { createContext, useState } from "react";

const SpotifyContext = createContext();

const SpotifyProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedSong, setSelectedSong] = useState(0);
  return (
    <SpotifyContext
      value={{ isPlaying, setIsPlaying, selectedSong, setSelectedSong }}
    >
      {children}
    </SpotifyContext>
  );
};

export { SpotifyContext, SpotifyProvider };
