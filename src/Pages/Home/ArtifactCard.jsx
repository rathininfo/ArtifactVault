import React from "react";
import { Link } from "react-router-dom";

const ArtifactCard = ({ artifact }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full h-48 object-cover"
        src={artifact.artifactImage}
        alt={artifact.artifactName}
      />
      <div className="py-4">
        <h2 className="text-xl font-bold">{artifact.artifactName}</h2>
        <p className="text-sm text-gray-500 mt-2">
          {artifact.historicalContext}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium">
            {artifact.likeCount} Likes
          </span>
          <Link
            to={`/artifactDetails/${artifact._id}`}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
