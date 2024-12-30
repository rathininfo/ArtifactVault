import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, Link } from "react-router-dom";

const AllArtifacts = () => {
  const loaderData = useLoaderData(); // Initial data fetched by the loader
  const [artifacts, setArtifacts] = useState(loaderData); // State for artifacts
  const [search, setSearch] = useState(""); // State for search term

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredArtifacts = loaderData.filter((artifact) =>
      artifact.artifactName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setArtifacts(filteredArtifacts);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-8">All Artifacts</h1>

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search artifacts by name..."
          className="border border-gray-300 rounded-lg p-2 w-full md:w-1/2"
        />
      </div>

      {/* Display Artifacts */}
      {artifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <img
                src={artifact.artifactImage}
                alt={`Image of ${artifact.artifactName}`}
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
                  to={`/artifactDetails/${artifact._id}`}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold text-gray-700">
            No artifacts found
          </h2>
          <p className="text-gray-500 mt-2">
            Try searching for something else.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllArtifacts;
