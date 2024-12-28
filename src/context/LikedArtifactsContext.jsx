import { createContext, useState } from "react";

export const LikedArtifactsContext = createContext();

const LikedArtifactsProvider = ({ children }) => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);

  // Add artifact to the liked list.
  const addLikedArtifact = (artifact) => {
    setLikedArtifacts((prev) =>
      prev.some((item) => item._id === artifact._id)
        ? prev
        : [...prev, artifact]
    );
  };

  return (
    <LikedArtifactsContext.Provider
      value={{ likedArtifacts, addLikedArtifact }}
    >
      {children}
    </LikedArtifactsContext.Provider>
  );
};

export default LikedArtifactsProvider;
