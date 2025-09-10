import React from "react";
import { Link } from "react-router-dom";
import "./Woman.css";

const SECTIONS = [
  {
    key: "fashion",
    title: "Elegant Fashion",
    copy: "Explore the latest in women's clothing from chic dresses to everyday essentials. Find your unique style with our exclusive collections.",
    cta: "Shop Fashion",
    to: "/Fashoon", // ← لينك داخلي ثابت
    img: "https://img.freepik.com/free-photo/stiletto-heels-two-beauty-platform_1203-6510.jpg?w=1480",
    alt: "Woman in elegant fashion outfit",
  },
  {
    key: "perfumes",
    title: "Enchanting Perfumes",
    copy: "Indulge your senses with our curated range of luxury fragrances. From floral to oriental, find the scent that defines you.",
    cta: "Shop Perfumes",
    to: "/perfumes",
    img: "https://img.freepik.com/free-photo/front-view-raspberry-smelling-perfume-inside-flask-purple_140725-20806.jpg?t=st=1757024647~exp=1757028247~hmac=5638c4392cfce8d911c07c28cbd0336152982541b61b1aea36e35bc7093db916&w=1480",
    alt: "Luxury perfume bottle close-up",
  },
  {
    key: "makeup",
    title: "Premium Makeup",
    copy: "Unleash your creativity with professional makeup products for every occasion. Glow, highlight, and define your beauty.",
    cta: "Shop Makeup",
    to: "/makeup",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    alt: "Premium makeup set and brushes",
  },
  {
    key: "wellness",
    title: "Wellness Essentials",
    copy: "Elevate your self-care with high-quality wellness and health tools. Everything you need for a balanced lifestyle.",
    cta: "Shop Wellness",
    to: "/wellness",
    img: "https://img.freepik.com/free-photo/women-makeup-use-cosmetic-products-make-review-record-tutorial-video-how-care-about-yourself-wear-white-soft-bathrobes-pose-front-smartphone_273609-52757.jpg?w=1480",
    alt: "Wellness and self-care essentials",
  },
  {
    key: "skincare",
    title: "Skin Care Rituals",
    copy: "Nourish your skin with luxurious products designed for radiant, healthy beauty. Start your glowing journey here.",
    cta: "Shop Skin Care",
    to: "/skincare",
    img: "https://img.freepik.com/free-photo/assortment-cucumber-citrus-spa-treatment-concept_23-2148645576.jpg?w=1480",
    alt: "Skin care products on a minimal setup",
  },
];

export default function Woman() {
  return (
    <main className="woman-page">
      {/* HERO */}
      <section className="woman-hero" aria-label="Women's Luxury Hero">
        <div className="container">
          <h1 className="woman-title">Discover Women's Luxury</h1>
          <p className="woman-subtitle">
            Fashion • Fragrances • Makeup • Wellness • Skin Care
          </p>

          {/* زر الهيرو يودّي لصفحة رئيسية للنساء مثلاً */}
          <Link
            to="/women"
            className="shop-btn shop-btn--primary"
            aria-label="Shop Women's Collection"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* SECTIONS */}
      {SECTIONS.map((s, idx) => (
        <section
          key={s.key}
          id={s.key}
          className={`woman-section ${idx % 2 === 1 ? "reverse" : ""}`}
          aria-labelledby={`${s.key}-title`}
        >
          <div className="section-content">
            <div className="section-text">
              <h2 id={`${s.key}-title`}>{s.title}</h2>
              <p>{s.copy}</p>

              {/* زر CTA كـ Link داخلي */}
              <Link
                to={s.to}
                className="shop-btn"
                aria-label={`Shop ${s.title}`}
              >
                {s.cta}
              </Link>
            </div>

            <div className="section-media">
              {/* الصورة نفسها كمان Link لنفس الصفحة */}
              <Link to={s.to} aria-label={`Open ${s.title}`}>
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
