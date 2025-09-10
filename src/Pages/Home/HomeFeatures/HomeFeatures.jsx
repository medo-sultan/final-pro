import React from "react";
import "./HomeFeatures.css";

const features = [
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="2">
        <path d="M5 26v-8a5 5 0 0 1 5-5h6v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3h2a5 5 0 0 1 5 5v8" />
        <rect x="7" y="18" width="22" height="8" rx="3" />
        <path d="M20 26v2a2 2 0 0 1-2 2h-0a2 2 0 0 1-2-2v-2" />
      </svg>
    ),
    title: "Fast, Free Shipping",
    subtitle: "On order over $50",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="2">
        <circle cx="18" cy="18" r="16" />
        <path d="M18 10v8l6 3" />
      </svg>
    ),
    title: "Next Day Delivery",
    subtitle: "Free– spend over $99",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="2">
        <path d="M6 26l6-11h12l6 11" />
        <circle cx="18" cy="18" r="4" />
        <path d="M18 22v4" />
      </svg>
    ),
    title: "Low Price Guarantee",
    subtitle: "We offer competitive prices",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" stroke="#222" strokeWidth="2">
        <path d="M9 21v-6a9 9 0 0 1 18 0v6" />
        <path d="M4 21h28" />
        <path d="M9 21v3a9 9 0 0 0 18 0v-3" />
      </svg>
    ),
    title: "Quality Guarantee",
    subtitle: "We Guarantee Our Products",
  },
];

export default function HomeFeatures() {
  return (
    <div className="home-features">
      {features.map((f, i) => (
        <div className="feature" key={i}>
          <div className="feature-icon">{f.icon}</div>
          <div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-sub">{f.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
