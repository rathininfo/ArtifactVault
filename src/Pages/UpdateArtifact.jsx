import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArtifact = () => {
  const { id } = useParams(); // Get the artifact ID from the URL
  const [artifact, setArtifact] = useState(null); // Store artifact data
  const [loading, setLoading] = useState(true); // Show loading state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Fetch artifact data by ID
  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const res = await fetch(
          `https://historical-artifacts-server-side.vercel.app/user-addded-artifacts/${id}`
        );
        if (res.ok) {
          const data = await res.json();
          setArtifact(data);
        } else {
          Swal.fire("Error", "Artifact not found.", "error");
        }
      } catch (error) {
        console.error("Error fetching artifact:", error);
        Swal.fire("Error", "Failed to fetch artifact data.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchArtifact();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateData = {
      name: artifact.name,
      image: artifact.image,
      context: artifact.context,
      createdAt: artifact.createdAt,
      discoveredAt: artifact.discoveredAt,
      discoveredBy: artifact.discoveredBy,
      location: artifact.location,
    };

    try {
      const response = await fetch(
        `https://historical-artifacts-server-side.vercel.app/user-added-artifacts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to update artifact. Status: ${response.status}`
        );
      }

      const data = await response.json(); // The response will contain the updated artifact

      console.log("Artifact updated successfully:", data);

      // Manually update the state with the updated data
      setArtifact({
        ...data, // Update the state with the full updated artifact
      });

      Swal.fire("Success", "Artifact updated successfully!", "success");
    } catch (err) {
      console.error("Error updating artifact:", err);
      Swal.fire("Error", "Failed to update artifact.", "error");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifact((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!artifact) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Artifact not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md mt-8">
      <Helmet>
        <title>Update Artifacts</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-6">Update Artifact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Artifact Name:</label>
          <input
            type="text"
            name="name"
            value={artifact.name || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">
            Artifact Image (URL):
          </label>
          <input
            type="text"
            name="image"
            value={artifact.image || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Artifact Type:</label>
          <select
            name="type"
            value={artifact.type || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">
            Historical Context:
          </label>
          <textarea
            name="context"
            value={artifact.context || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Created At:</label>
          <input
            type="text"
            name="createdAt"
            value={artifact.createdAt || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Discovered At:</label>
          <input
            type="text"
            name="discoveredAt"
            value={artifact.discoveredAt || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Discovered By:</label>
          <input
            type="text"
            name="discoveredBy"
            value={artifact.discoveredBy || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Present Location:</label>
          <input
            type="text"
            name="location"
            value={artifact.location || ""}
            onChange={handleChange}
            className="p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
