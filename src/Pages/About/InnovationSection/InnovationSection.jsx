import React from "react";
import {
  FaTruckMoving,
  FaRegClock,
  FaTags,
  FaRegThumbsUp,
} from "react-icons/fa";
import "./InnovationSection.css";

export default function InnovationSection() {
  return (
    <section className="innovation-section">
      <h2 className="innovation-title">
        We enable innovation. From
        <br />
        ideation all the way through to
        <br />
        market delivery.
      </h2>
      <div className="innovation-features">
        <div className="innovation-feature">
          <FaTruckMoving size={60} color="#bbb" />
          <div className="innovation-feature-title">Fast, Free Shipping</div>
          <div className="innovation-feature-desc">On order over $50</div>
        </div>
        <div className="innovation-feature">
          <FaRegClock size={60} color="#bbb" />
          <div className="innovation-feature-title">Next Day Delivery</div>
          <div className="innovation-feature-desc">Free– spend over $99</div>
        </div>
        <div className="innovation-feature">
          <FaTags size={60} color="#bbb" />
          <div className="innovation-feature-title">Low Price Guarantee</div>
          <div className="innovation-feature-desc">
            We offer competitive prices
          </div>
        </div>
        <div className="innovation-feature">
          <FaRegThumbsUp size={60} color="#bbb" />
          <div className="innovation-feature-title">Satisfaction Guarantee</div>
          <div className="innovation-feature-desc">
            We Guarantee Our Products
          </div>
        </div>
      </div>
    </section>
  );
}
