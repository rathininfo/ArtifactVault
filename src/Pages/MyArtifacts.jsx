import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2"; // For alerts
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const MyArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  console.log(artifacts);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext); // Accessing user data from context

  useEffect(() => {
    fetch(
      `http://localhost:5000/added_artifacts_collection?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setArtifacts(data));
  }, [user.email]);

  //   const handleDelete = async (artifactId) => {
  //     const confirmation = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#d33",
  //       cancelButtonColor: "#3085d6",
  //       confirmButtonText: "Yes, delete it!",
  //     });

  //     if (confirmation.isConfirmed) {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:5000/artifacts_collection/${artifactId}`,
  //           {
  //             method: "DELETE",
  //           }
  //         );

  //         if (response.ok) {
  //           setArtifacts(
  //             artifacts.filter((artifact) => artifact._id !== artifactId)
  //           );
  //           Swal.fire("Deleted!", "Your artifact has been deleted.", "success");
  //         } else {
  //           Swal.fire("Error", "Failed to delete the artifact.", "error");
  //         }
  //       } catch (error) {
  //         console.error("Error deleting artifact:", error);
  //         Swal.fire("Error", "Something went wrong. Please try again.", "error");
  //       }
  //     }
  //   };

  //   if (loading) {
  //     return <div className="text-center mt-10">Loading your artifacts...</div>;
  //   }

  //   if (!user) {
  //     return (
  //       <div className="text-center mt-10">
  //         Please log in to view your added artifacts.
  //       </div>
  //     );
  //   }

  //   if (artifacts.length === 0) {
  //     return (
  //       <div className="text-center mt-10">
  //         <p>You haven't added any artifacts yet.</p>
  //         <Link
  //           to="/add-artifact"
  //           className="text-blue-500 hover:underline mt-4 inline-block"
  //         >
  //           Add Your First Artifact
  //         </Link>
  //       </div>
  //     );
  //   }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1>addded card {artifacts.length}</h1>
    </div>
  );
};

export default MyArtifacts;
