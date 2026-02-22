import { useState, useEffect } from "react";

// Import your images
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpg";
import img9 from "../assets/image9.jpg";

function Hero() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(rgba(196,0,0,0.75), rgba(196,0,0,0.75)),
          url(${images[currentImage]})
        `,
      }}
    >
      <div className="hero-content">
        <h1>24/7 Emergency Ambulance Service</h1>
        <p>Fast • Reliable • Life Saving Support</p>
        <a href="tel:+917989827051" className="hero-btn">
          📞 Call Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
