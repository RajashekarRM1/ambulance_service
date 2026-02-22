import { useState, useEffect } from "react";

// ✅ Import images
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9
  ];

  /* ✅ Close modal on ESC key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* ✅ Disable background scroll when modal open */
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  return (
    <section className="gallery">
      <h2>Our Ambulances</h2>

      <div className="slider">
        <div className="slide-track">
          {images.concat(images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Ambulance"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)} // click outside closes
        >
          <span
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </span>

          <img
            src={selectedImage}
            alt="Full Ambulance"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
