import React from "react";
import "./MissionSection.css";
import { FaRegCommentDots } from "react-icons/fa";

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <div className="mission-text">
          <FaRegCommentDots className="mission-icon" size={70} color="#bbb" />
          <h2 className="mission-title">Our Mission</h2>
          <p className="mission-desc">
            As part of the TenTen Group, our mission is to make it easy to do
            business anywhere.
            <br />
            We do this by giving suppliers the tools necessary to reach a global
            audience for their products, and by helping buyers find products and
            suppliers quickly and efficiently.
          </p>
        </div>
        <div className="mission-image-wrapper">
          <img
            src="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/about-1.jpg"
            alt="Two people in business setting"
            className="mission-image"
          />
        </div>
      </div>
    </section>
  );
}
