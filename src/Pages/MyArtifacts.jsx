import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]); // To store artifacts
  const { user } = useContext(AuthContext); // Access user data from context
  const [loading, setLoading] = useState(true); // For loading state

  // Fetch artifacts added by the logged-in user
  useEffect(() => {
    if (user && user.email) {
      fetch(
        `http://localhost:5000/added_artifacts_collection?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setArtifacts(data);
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Error fetching artifacts:", error);
          setLoading(false);
        });
    }
  }, [user]);

  // Handle Delete Artifact
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user-addded-artifacts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setArtifacts(artifacts.filter((artifact) => artifact._id !== id)); // Remove deleted artifact from state
              Swal.fire(
                "Deleted!",
                "Your artifact has been deleted.",
                "success"
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting artifact:", error);
            Swal.fire(
              "Error!",
              "Could not delete the artifact. Try again later.",
              "error"
            );
          });
      }
    });
  };

  // If loading, show a spinner
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // If no artifacts, show a meaningful message
  if (artifacts.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-700">
          No Artifacts Found
        </h2>
        <p className="text-gray-500">
          You haven't added any artifacts yet. Start adding some to see them
          here!
        </p>
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
