import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllArtifacts = () => {
  const artifacts = useLoaderData(); // Fetch artifact data from loader

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">All Artifacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-white shadow-md rounded-lg p-4 border"
          >
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="h-48 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              {artifact.artifactName}
            </h2>
            <p className="text-gray-600 mb-4">
              {artifact.historicalContext.slice(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-medium">
                {artifact.likeCount} Likes
              </p>
              <Link
                to={`/artifact/${artifact._id}`} // Dynamic route for details page
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
