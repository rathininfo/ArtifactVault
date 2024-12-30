import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]); // To store artifacts
  const { user } = useContext(AuthContext); // Access user data from context
  const [loading, setLoading] = useState(true); // For loading state

  // Fetch artifacts added by the logged-in user
  useEffect(() => {
    if (user && user.email) {
      setLoading(true); // Set loading to true before starting fetch
      fetch(
        `http://localhost:5000/added_artifacts_collection?email=${user.email}`,
        {
          credentials: "include",
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch artifacts: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setArtifacts(Array.isArray(data) ? data : []); // Ensure artifacts is always an array
          setLoading(false); // Data fetched, set loading to false
        })
        .catch((error) => {
          console.error("Error fetching artifacts:", error);
          setArtifacts([]); // Reset artifacts to an empty array on error
          setLoading(false); // Fetch failed, set loading to false
        });
    } else {
      setArtifacts([]); // Reset artifacts if no user is logged in
      setLoading(false); // No fetch needed, set loading to false
    }
  }, [user.email]);

  // Handle Delete Artifact
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/user-added-artifacts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to delete artifact. Status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Artifact deleted successfully:", data);

      // Remove the deleted artifact from the state
      setArtifacts((prevArtifacts) =>
        prevArtifacts.filter((artifact) => artifact._id !== id)
      );

      // Optionally show a success message
      Swal.fire("Deleted!", "Your artifact has been deleted.", "success");
    } catch (err) {
      console.error("Error deleting artifact:", err);
      Swal.fire(
        "Error!",
        "There was a problem deleting your artifact.",
        "error"
      );
    }
  };

  // If loading, show a spinner
  if (loading) {
    return <span class="loading loading-spinner loading-lg"></span>;
  }

  // If no artifacts, show a meaningful message
  if (artifacts.length === 0) {
    return (
      <div className="text-center mt-10">
        <Helmet>
          <title>My Artifacts</title>
        </Helmet>
        <h2 className="text-2xl font-semibold text-gray-700">
          You haven't added any artifacts yet.
        </h2>
        <p className="text-gray-500">
          Start adding some artifacts to see them here!
        </p>
        <Link
          to="/add-artifact" // Link to the page where the user can add an artifact
          className="mt-4 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mb-10"
        >
          Add Artifact
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Artifacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div key={artifact._id} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold">{artifact.artifactName}</h2>
            <p className="text-gray-500 mb-4">{artifact.historicalContext}</p>
            <div className="flex space-x-4">
              <Link
                to={`/update-artifact/${artifact._id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(artifact._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtifacts;
