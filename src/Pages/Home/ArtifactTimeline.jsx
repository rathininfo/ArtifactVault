import React from "react";

const ArtifactTimeline = () => {
  const artifacts = [
    {
      id: 1,
      name: "Rosetta Stone",
      era: "196 BC",
      description: "Key to deciphering Egyptian hieroglyphs.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/1200px-Rosetta_Stone.JPG",
    },
    {
      id: 2,
      name: "Antikythera Mechanism",
      era: "2nd Century BC",
      description: "An ancient Greek analog computer.",
      image:
        "https://dl.acm.org/cms/attachment/0baf57b5-d289-49db-a2d1-df4edc621892/f1.jpg",
    },
    {
      id: 3,
      name: "Dead Sea Scrolls",
      era: "3rd Century BC - 1st Century AD",
      description: "Ancient Jewish texts discovered near the Dead Sea.",
      image:
        "https://media.wired.com/photos/6081e2f2ccb11d7f69cb8188/master/pass/business_ars_scrolls_929423652.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Artifact Timeline</h2>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="border-l-2 border-gray-300">
          {artifacts.map((artifact, index) => (
            <div
              key={artifact.id}
              className={`mb-10 ml-6 ${index % 2 === 0 ? "" : "self-end"}`}
            >
              <div className="absolute w-6 h-6 bg-green-600 rounded-full -left-3"></div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4">{artifact.name}</h3>
                <p className="text-gray-600">{artifact.era}</p>
                <p className="text-gray-700 mt-2">{artifact.description}</p>
                <a
                  href={`/artifact/${artifact.id}`}
                  className="text-green-600 mt-4 inline-block hover:underline"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtifactTimeline;
