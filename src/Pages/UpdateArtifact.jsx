import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArtifact = () => {
  const { id } = useParams(); // Get the artifact ID from the URL
  const navigate = useNavigate(); // Navigate to other pages
  const [artifact, setArtifact] = useState(null); // Store artifact data
  const [loading, setLoading] = useState(true); // Show loading state

  // Fetch artifact data by ID
  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/user-addded-artifacts/${id}`
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/added-artifacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artifact),
      });

      if (res.ok) {
        Swal.fire("Success", "Artifact updated successfully!", "success");
        navigate(`/artifacts/${id}`);
      } else {
        const errorData = await res.json();
        Swal.fire(
          "Error",
          errorData.error || "Failed to update artifact.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error updating artifact:", error);
      Swal.fire(
        "Error",
        "An error occurred while updating the artifact.",
        "error"
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifact({ ...artifact, [name]: value });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!artifact) {
    return <p>Artifact not found.</p>;
  }

  return (
    <div>
      <h1>Update Artifact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Artifact Name:</label>
          <input
            type="text"
            name="name"
            value={artifact.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Artifact Image (URL):</label>
          <input
            type="text"
            name="image"
            value={artifact.image || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Artifact Type:</label>
          <select
            name="type"
            value={artifact.type || ""}
            onChange={handleChange}
            required
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div>
          <label>Historical Context:</label>
          <textarea
            name="context"
            value={artifact.context || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Created At:</label>
          <input
            type="text"
            name="createdAt"
            value={artifact.createdAt || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Discovered At:</label>
          <input
            type="text"
            name="discoveredAt"
            value={artifact.discoveredAt || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Discovered By:</label>
          <input
            type="text"
            name="discoveredBy"
            value={artifact.discoveredBy || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Present Location:</label>
          <input
            type="text"
            name="location"
            value={artifact.location || ""}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Artifact</button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
