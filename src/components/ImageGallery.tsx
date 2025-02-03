import React, { useState } from "react";
import "./ImageGallery.css"; // Import CSS file
import Modal from "./Modal"; // Import Modal Component

// Image Data
const images = [
  { id: 1, src: "images/nature1.jpg", category: "Nature" },
  { id: 2, src: "images/nature2.jpg", category: "Nature" },
  { id: 3, src: "images/nature3.jpg", category: "Nature" },
  { id: 4, src: "images/nature4.jpg", category: "Nature" },
  { id: 5, src: "images/nature5.jpg", category: "Nature" },
  { id: 6, src: "images/tech1.jpg", category: "Tech" },
  { id: 7, src: "images/tech2.jpg", category: "Tech" },
  { id: 8, src: "images/tech3.jpg", category: "Tech" },
  { id: 9, src: "images/tech4.jpg", category: "Tech" },
  { id: 10, src: "images/tech5.jpg", category: "Tech" },
  { id: 11, src: "images/art1.jpg", category: "Art" },
  { id: 12, src: "images/art2.jpg", category: "Art" },
  { id: 13, src: "images/art3.jpg", category: "Art" },
  { id: 14, src: "images/art4.jpg", category: "Art" },
  { id: 15, src: "images/art5.jpg", category: "Art" },
];

const ImageGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Filter images by category
  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="container">
      {/* Filter Buttons */}
      <div className="filter-container">
        {["All", "Nature", "Tech", "Art"].map((category) => (
          <button
            key={category}
            className="button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery">
        {filteredImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.category}
            className="image"
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <Modal imageSrc={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default ImageGallery;
