import React, { useState, useEffect } from "react";
import ArtifactCard from "./ArtifactCard";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/artifacts_collection"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data = await response.json();

        // Sort the artifacts by likeCount and take the top 6
        const sortedArtifacts = data
          .sort((a, b) => b.likeCount - a.likeCount)
          .slice(0, 6);

        setArtifacts(sortedArtifacts);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };

    fetchArtifacts();
  }, []);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Featured Artifacts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <ArtifactCard key={artifact._id} artifact={artifact} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/all-artifacts">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
