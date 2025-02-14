import React from "react";

const ArtifactLegends = () => {
  const legends = [
    {
      id: 1,
      name: "Holy Grail",
      legend:
        "Believed to be the cup used by Jesus at the Last Supper, sought after by knights and adventurers for centuries.",
      image: "https://quadrant.org.au/wp-content/uploads/2022/12/grail.png",
    },
    {
      id: 2,
      name: "Excalibur",
      legend:
        "King Arthur's magical sword, said to grant sovereignty and invincibility.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Arthur-Pyle_Excalibur_the_Sword.JPG/330px-Arthur-Pyle_Excalibur_the_Sword.JPG",
    },
    {
      id: 3,
      name: "Ark of the Covenant",
      legend:
        "The sacred chest holding the Ten Commandments, said to possess divine powers.",
      image: "https://www.worldhistory.org/uploads/images/14382.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Artifact Legends</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {legends.map((legend) => (
          <div
            key={legend.id}
            className="bg-white rounded shadow-lg overflow-hidden"
          >
            <img
              src={legend.image}
              alt={legend.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{legend.name}</h3>
              <p className="text-gray-700 mt-2">{legend.legend}</p>
              <a
                href={`/legends/${legend.id}`}
                className="text-green-600 mt-4 inline-block hover:underline"
              >
                Discover the Legend
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtifactLegends;