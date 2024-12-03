// Install the library first:
// npm install react-image-gallery

"use client";
import React, { useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryImg = () => {
  const initialImages = [
    { image1: "./banner1.jpeg", type: "staff" },
    { image1: "./banner2.jpeg", type: "staff" },
    { image1: "./banner3.jpeg", type: "staff" },
    { image1: "./WhoWeAre.jpeg", type: "staff" },
    { image1: "./3.jpeg", type: "class" },
    { image1: "./4.jpeg", type: "class" },
    { image1: "./5.jpeg", type: "class" },
    { image1: "./8.jpeg", type: "class" },
    { image1: "./9.jpeg", type: "class" },
    { image1: "./10.jpeg", type: "class" },
    { image1: "./11.jpeg", type: "class" },
    { image1: "./12.jpeg", type: "class" },
    { image1: "./13.jpeg", type: "class" },
    { image1: "./14.jpeg", type: "class" },
    { image1: "./15.jpeg", type: "class" },
  ];

  const [images, setImages] = useState(initialImages);
  const [activeCategory, setActiveCategory] = useState("all");

  const filterImages = (category) => {
    if (category === "all") {
      setImages(initialImages);
    } else {
      const filteredImages = initialImages.filter(
        (image) => image.type === category
      );
      setImages(filteredImages);
    }
    setActiveCategory(category);
  };

  const imageItems = images.map((image) => ({
    original: image.image1,
    thumbnail: image.image1,
    description: image.type, // Optionally, you can add descriptions
  }));

  return (
    <div className="pb-10">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => filterImages("all")}
          className={`text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm md:text-base font-medium px-5 py-2.5 text-center me-3 mb-3 category-button ${
            activeCategory === "all" ? "active" : ""
          }`}
        >
          All categories
        </button>
        <button
          type="button"
          onClick={() => filterImages("staff")}
          className={`category-button ${
            activeCategory === "staff" ? "active" : ""
          } text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm md:text-base font-medium px-3 py-2 text-center me-3 mb-3`}
        >
          Staff
        </button>
        <button
          type="button"
          onClick={() => filterImages("class")}
          className={`category-button ${
            activeCategory === "class" ? "active" : ""
          } text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm md:text-base font-medium px-3 py-2 text-center me-3 mb-3`}
        >
          Class
        </button>
      </div>
      <Gallery items={imageItems} />
    </div>
  );
};

export default GalleryImg;
