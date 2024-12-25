// FeaturedArtifacts.jsx
import React, { useState, useEffect } from "react";
import ArtifactCard from "./ArtifactCard";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  // Fetch artifacts data (you can replace this with your API or static data)
  useEffect(() => {
    const fetchArtifacts = async () => {
      // Example data; replace this with your actual fetch logic
      const artifactData = [
        {
          id: 1,
          name: "Rosetta Stone",
          description: "An ancient Egyptian artifact.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/1200px-Rosetta_Stone.JPG",
          likeCount: 120,
        },
        {
          id: 2,
          name: "Antikythera Mechanism",
          description: "An ancient analog computer.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg/220px-NAMA_Machine_d%27Anticyth%C3%A8re_1.jpg",
          likeCount: 150,
        },
        {
          id: 3,
          name: "Dead Sea Scrolls",
          description: "Ancient religious texts.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4fZawDAv-nMyFaX2HPbm89FCfNZKfAeMqg&s",
          likeCount: 80,
        },
        {
          id: 4,
          name: "Machu Picchu",
          description: "Inca city set in the Andes Mountains.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSujr7zcu9Ql5pQKfqq0EWrkiGrgrJCMAGPQ&s",
          likeCount: 200,
        },
        {
          id: 5,
          name: "King Tut's Mask",
          description: "Golden mask of the Egyptian pharaoh.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1EXNY_q4Z2OSs5RrrB55KygypnlAUlbg4mFG00RyXS5P0j7VQlKdHjeFHENBVXgQIBQ&usqp=CAU",
          likeCount: 95,
        },
        {
          id: 6,
          name: "The Great Sphinx",
          description: "A limestone statue of a mythical creature.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjndZG1mFSDPGR7pWrWPu8wJOOOqbrGx3Taw&s",
          likeCount: 170,
        },
        {
          id: 7,
          name: "Easter Island Statues",
          description: "Statues of human figures on Easter Island.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/AhuTongariki.JPG/640px-AhuTongariki.JPG",
          likeCount: 40,
        },
      ];

      // Sort the artifacts by likeCount and take the top 6
      const sortedArtifacts = artifactData
        .sort((a, b) => b.likeCount - a.likeCount)
        .slice(0, 6);
      setArtifacts(sortedArtifacts);
    };

    fetchArtifacts();
  }, []);

  return (
    <>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Featured Artifacts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
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
    </>
  );
};

export default FeaturedArtifacts;
