import React from "react";
import "./StoresSection.css";

const stores = [
  {
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/about-2.jpg",
    city: "Los Angeles",
    address: "34 Main Street, Los Angeles 9021",
    country: "United States",
  },
  {
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/about-3.jpg",
    city: "New York",
    address: "515 Broadway 10015 New York",
    country: "United States",
  },
  {
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/about-4.jpg",
    city: "California",
    address: "1000 California St 68114 Omaha",
    country: "United States",
  },
];

export default function StoresSection() {
  return (
    <section className="stores-section">
      <h2 className="stores-title">Stores around the world</h2>
      <div className="stores-list">
        {stores.map((store, idx) => (
          <div className="store-card" key={idx}>
            <div className="store-image-wrapper">
              <img src={store.image} alt={store.city} className="store-image" />
            </div>
            <div className="store-info">
              <h3 className="store-city">{store.city}</h3>
              <div className="store-address">{store.address}</div>
              <div className="store-country">{store.country}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
