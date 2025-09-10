import React from "react";
import { Link } from "react-router-dom";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <div className="about-section">
      <nav className="about-breadcrumb">
        <Link to="/">Home</Link>
        <span className="about-breadcrumb-separator">›</span>
        <span className="about-breadcrumb-current">About</span>
      </nav>
      <h1 className="about-title">
        We believe that great design should be available to everyone
      </h1>
      <div className="about-description">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
      <div className="about-stats">
        <div className="about-stat">
          <div className="about-stat-number">25</div>
          <div className="about-stat-label">
            years of experience in the
            <br />
            clothing industry
          </div>
        </div>
        <div className="about-stat">
          <div className="about-stat-number">+200</div>
          <div className="about-stat-label">
            showrooms around
            <br />
            the world
          </div>
        </div>
        <div className="about-stat">
          <div className="about-stat-number">+100M</div>
          <div className="about-stat-label">
            items of clothing sold
            <br />
            annually
          </div>
        </div>
        <div className="about-stat">
          <div className="about-stat-number">99%</div>
          <div className="about-stat-label">
            customers recommend our
            <br />
            brand to their friends
          </div>
        </div>
      </div>
    </div>
  );
}
