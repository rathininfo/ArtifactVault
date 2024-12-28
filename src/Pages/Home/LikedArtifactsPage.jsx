import { useContext } from "react";
import { LikedArtifactsContext } from "../../context/LikedArtifactsContext";

const LikedArtifactsPage = () => {
  const { likedArtifacts } = useContext(LikedArtifactsContext); // Access liked artifacts from the context.

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Liked Artifacts</h1>
      {likedArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {likedArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="border border-gray-300 rounded-lg p-4 shadow-md"
            >
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-4">
                {artifact.artifactName}
              </h2>
              <p className="text-gray-700 mt-2">{artifact.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-lg font-semibold text-gray-700">
            No liked artifacts yet.
          </h2>
          <p className="text-gray-500 mt-2">
            Explore artifacts and click "Like" to add them here.
          </p>
        </div>
      )}
    </div>
  );
};

export default LikedArtifactsPage;
