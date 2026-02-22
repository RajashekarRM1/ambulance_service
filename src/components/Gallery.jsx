import { useState } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1587745416684-47953f16f02f",
    "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
    "https://images.unsplash.com/photo-1588776814546-ec7e9c3cbd94",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e",
    "https://images.unsplash.com/photo-1580281657527-47a6e92f3f61",
    "https://images.unsplash.com/photo-1600959907703-125ba1374a12",
  ];

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

      {/* Modal */}
      {selectedImage && (
        <div className="modal">
          <span className="close-btn" onClick={() => setSelectedImage(null)}>
            ✖
          </span>
          <img src={selectedImage} alt="Full Ambulance" />
        </div>
      )}
    </section>
  );
}

export default Gallery;
