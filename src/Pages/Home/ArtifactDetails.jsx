import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { LikedArtifactsContext } from "../../context/LikedArtifactsContext";
import { Helmet } from "react-helmet-async";

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  const { addLikedArtifact } = useContext(LikedArtifactsContext); // Access the liked artifacts context

  const [count, setCount] = useState(artifact.likeCount);

  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://historical-artifacts-server-side.vercel.app/artifacts_collection/${artifact._id}/like`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ likeCount: count + 1 }), // Send updated like count
        }
      );
      const updatedArtifact = await response.json();
      if (updatedArtifact) {
        setCount(updatedArtifact.likeCount); // Update state with the new like count
        addLikedArtifact(artifact); // Add the artifact to the liked artifacts context

        // Show success alert
        Swal.fire({
          icon: "success",
          title: "Liked!",
          text: `You have liked ${artifact.artifactName}.`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update like count. Please try again.",
        });
      }
    } catch (err) {
      console.error("Error updating like count:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating like count. Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <Helmet>
        <title>Artifact Details</title>
      </Helmet>
      <img
        src={artifact.artifactImage}
        alt={artifact.artifactName}
        className="w-full h-96 object-cover rounded-lg"
      />
      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">{artifact.artifactName}</h1>
        <p className="text-gray-600 mb-6">{artifact.historicalContext}</p>
        <p className="text-gray-800 mb-6">{artifact.description}</p>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">{count} Likes</span>
          <button
            onClick={handleLike}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
