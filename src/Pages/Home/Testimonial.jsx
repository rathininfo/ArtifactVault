import React from "react";

const testimonials = [
  {
    name: "John Doe",
    review:
      "ArtifactVault is an amazing platform! I love how I can explore and track historical artifacts with ease.",
    image: "https://i.ibb.co.com/2d3gWPH/download.jpg",
  },
  {
    name: "Jane Smith",
    review:
      "Adding my own artifact contributions was super easy. This platform is a treasure trove for history lovers!",
    image: "https://i.ibb.co.com/S3pCDNF/download-4.jpg",
  },
  {
    name: "Alice Johnson",
    review:
      "I discovered so many fascinating artifacts here. The UI is smooth, and I enjoy browsing through the collection!",
    image: "https://i.ibb.co.com/cys65mZ/download-1.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">What Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
