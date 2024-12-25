// ArtifactCard.jsx
import React from "react";

const ArtifactCard = ({ artifact }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full h-48 object-cover"
        src={artifact.image}
        alt={artifact.name}
      />
      <div className="py-4">
        <h2 className="text-xl font-bold">{artifact.name}</h2>
        <p className="text-sm text-gray-500 mt-2">{artifact.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium">
            {artifact.likeCount} Likes
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
