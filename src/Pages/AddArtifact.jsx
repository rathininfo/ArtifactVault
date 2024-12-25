// Import necessary dependencies

import { useContext, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  // State for form data
  const [formData, setFormData] = useState({
    artifactName: "",
    artifactImage: "",
    artifactType: "Tools",
    historicalContext: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const artifactData = {
      ...formData,
      addedByName: user.displayName,
      addedByEmail: user.email,
      likeCount: 0, // Initially set to 0
    };

    try {
      // Send data to the database (adjust the endpoint URL as needed)
      const response = await axios.post(
        "http://localhost:5000/artifacts-info",
        artifactData
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Artifact Added",
          text: "The artifact has been added successfully!",
        });
        // Reset the form
        setFormData({
          artifactName: "",
          artifactImage: "",
          artifactType: "Tools",
          historicalContext: "",
          createdAt: "",
          discoveredAt: "",
          discoveredBy: "",
          presentLocation: "",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was a problem adding the artifact. Please try again.",
      });
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Add Artifact</h1>
      <form onSubmit={handleSubmit}>
        {/* Artifact Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Name
          </label>
          <input
            type="text"
            name="artifactName"
            value={formData.artifactName}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Artifact Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Image (URL)
          </label>
          <input
            type="url"
            name="artifactImage"
            value={formData.artifactImage}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Artifact Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Type
          </label>
          <select
            name="artifactType"
            value={formData.artifactType}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        {/* Historical Context */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Created At */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Created At
          </label>
          <input
            type="text"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., 100 BC"
          />
        </div>

        {/* Discovered At */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Discovered At
          </label>
          <input
            type="text"
            name="discoveredAt"
            value={formData.discoveredAt}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., 1799"
          />
        </div>

        {/* Discovered By */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Discovered By
          </label>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Present Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Present Location
          </label>
          <input
            type="text"
            name="presentLocation"
            value={formData.presentLocation}
            onChange={handleChange}
            required
            className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* Logged-in User Info (Read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Added By
          </label>
          <input
            type="text"
            value={user.name}
            readOnly
            className="mt-1 py-2 block w-full border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="mt-1 py-2 block w-full border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifact;
