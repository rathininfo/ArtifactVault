import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  const slides = [
    {
      title: "Discover Ancient Artifacts",
      description:
        "Explore the mysteries of historical artifacts, from the Rosetta Stone to the Antikythera Mechanism.",
      image:
        "https://i.ibb.co.com/P6qXdM3/Pngtree-ancient-artifacts-from-an-archaeological-3167955.jpg",
    },
    {
      title: "Add Your Contributions",
      description:
        "Share your knowledge and upload your own artifact entries to enrich the community.",
      image:
        "https://i.ibb.co.com/Dtb6PdD/mahfuz-ahmed-lf-HCOZj61-Hw-unsplash.jpg",
    },
    {
      title: "Track Your Favorite Items",
      description:
        "Like and save artifacts to keep track of your personal discoveries and contributions.",
      image:
        "https://i.ibb.co.com/FDBzxLH/deniz-demirci-Myg-Qcr-Nm-J14-unsplash.jpg",
    },
  ];

  return (
    <div className=" bg-gray-100">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Pass modules here
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[400px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-center bg-black bg-opacity-50 text-white p-6 rounded-lg max-w-xl">
                <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
