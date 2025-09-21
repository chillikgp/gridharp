import React from "react";
import "../CSS/About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Column (Text Content) */}
        <div className="about-text-column">
          <span className="about-tag">About Harp & Code</span>
          <h2 className="about-headline">We partner with visionaries</h2>
          <div className="about-description">
            <p>
              We help entrepreneurs, small businesses, and creators turn bold ideas into meaningful digital products.
            </p>
            <p>We specialize in:</p>
            <ul className="about-specialties">
              <li>Elegant, user-friendly websites</li>
              <li>Custom mobile and web apps</li>
              <li>AI-powered tools and automation</li>
            </ul>
            <p>Whether you're starting fresh or scaling fast, we build digital experiences that feel as inspired as your mission.</p>
          </div>
          <button className="about-contact-button">Contact Us</button>
        </div>

        {/* Right Column (Image) */}
        <div className="about-image-column">
          <img src="/greg-rakozy-oMpAz-DN-9I-unsplash (1).jpg" alt="Harp and Code Team" />
        </div>
      </div>
    </section>
  );
}
