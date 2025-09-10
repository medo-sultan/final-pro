import React, { useRef } from "react";
import "./Furniture.css";

export default function Furniture() {
  const scrollerRef = useRef(null);
  const scrollBy = (px) =>
    scrollerRef.current?.scrollBy({ left: px, behavior: "smooth" });

  const categories = [
    {
      title: "Living Room",
      subtitle: "Sofas · TV Units · Coffee Tables",
      image:
        "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop",
      link: "/furniture/living-room",
    },
    {
      title: "Bedroom",
      subtitle: "Beds · Wardrobes · Nightstands",
      image:
        "http://img.freepik.com/free-photo/3d-rendering-vintage-minimal-mock-up-bedroom-scandinavian-classic-style_105762-2123.jpg?t=st=1756433947~exp=1756437547~hmac=4f5a06036cf90ef5321549c37d9d9fb46da3a38abd9a525e5531b727d54c4d2b&w=1480",
      link: "/furniture/bedroom",
    },
    {
      title: "Dining",
      subtitle: "Tables · Chairs · Buffets",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
      link: "/furniture/dining",
    },
    {
      title: "Workspace",
      subtitle: "Desks · Shelves · Task Chairs",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
      link: "/furniture/workspace",
    },
  ];

  const bestSellers = [
    {
      name: "Aalto Linen Sofa",
      price: "$899",
      image:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "modern leather chair",
      price: "$219",
      image:
        "https://img.freepik.com/free-photo/closeup-armless-chair-with-concave-back-loft-style-furniture_181624-25825.jpg?t=st=1756434091~exp=1756437691~hmac=5215e0b92f69b63fb89d82ba35356dc5c8fa3d00f8be241dc38c2548d6b04dcb&w=1480",
    },
    {
      name: "Woven Accent Chair",
      price: "$299",
      image:
        "https://img.freepik.com/free-photo/blue-modern-house-large-coffee_1203-5632.jpg?t=st=1756434429~exp=1756438029~hmac=68ff0a71c2bf05cd287f7b55b2837fe6826b6e905c9e595df6c7688627b7502c&w=1480",
    },
    {
      name: "Minimal Floor Lamp",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Dining",
      price: "$449",
      image:
        "https://img.freepik.com/free-photo/four-person-table-front-window-restaurant_140725-2513.jpg?t=st=1756434643~exp=1756438243~hmac=104329d9f2955807f4271cb435fb2a46df6ff2a40717518879baf5237c8c9f51&w=1480",
    },
    {
      name: "modern marble bathroom",
      price: "$549",
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-modern-house-bathroom-with-technology-art_181624-2980.jpg?t=st=1756434200~exp=1756437800~hmac=8be3b572678703eb22cccf58c0291420775dbdf2e636d850685ecc22b136e772&w=1480",
    },
    {
      name: "Office",
      price: "$449",
      image:
        "https://img.freepik.com/free-photo/front-view-off-office-desk_23-2149034544.jpg?t=st=1756434471~exp=1756438071~hmac=3f64631e3c42827ccb45a8c031cdd49a8508a3c9924366a5dac07adfd65b99dc&w=1480",
    },
    {
      name: "Walnut TV Console",
      price: "$449",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  const inspirations = [
    {
      title: "Scandi Calm",
      image:
        "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Warm Minimal",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Cozy Corners",
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Earthy Dining",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <main className="fnr">
      {/* 1) HERO */}
      <section className="fnr-hero">
        <picture className="fnr-hero__media" aria-hidden>
          <img
            src="https://img.freepik.com/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199313.jpg?t=st=1756435614~exp=1756439214~hmac=6a2d686f3c4d2dedc269ab5eb2090e3d92c7c7af6525380f6d9bd91e25293d95&w=1480"
            alt="Contemporary living room with soft neutral sofa and wooden accents"
            loading="eager"
          />
        </picture>
        <div className="fnr-hero__content fnr-container">
          <span className="fnr-eyebrow">F/W 2025</span>
          <h1>Furniture that feels like home.</h1>
          <p>
            Crafted textures, honest materials, and shapes that breathe. Build
            your space piece by piece.
          </p>
          <div className="fnr-actions">
            <a href="/collections/new" className="fnr-btn fnr-btn--solid">
              Explore New
            </a>
            <a href="/sale" className="fnr-btn fnr-btn--ghost">
              View Sale
            </a>
          </div>
        </div>
      </section>

      {/* 2) FEATURED CATEGORIES */}
      <section className="fnr-cats fnr-container">
        <header className="fnr-section-head">
          <h2>Shop by room</h2>
          <a href="/collections/all" className="fnr-link">
            View all
          </a>
        </header>
        <div className="fnr-grid">
          {categories.map((c) => (
            <a key={c.title} href={c.link} className="fnr-cat-card">
              <img src={c.image} alt={c.title} loading="lazy" />
              <div className="fnr-cat-card__overlay" />
              <div className="fnr-cat-card__text">
                <h3>{c.title}</h3>
                <p>{c.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 3) BEST SELLERS (Horizontal scroll) */}
      <section className="fnr-sellers">
        <div className="fnr-container">
          <header className="fnr-section-head">
            <h2>Best sellers</h2>
            <div className="fnr-scroller-ctrls">
              <button
                aria-label="scroll left"
                onClick={() => scrollBy(-320)}
                className="fnr-icon-btn"
              >
                ‹
              </button>
              <button
                aria-label="scroll right"
                onClick={() => scrollBy(320)}
                className="fnr-icon-btn"
              >
                ›
              </button>
            </div>
          </header>

          <div className="fnr-card-row" ref={scrollerRef}>
            {bestSellers.map((p) => (
              <article key={p.name} className="fnr-prod">
                <div className="fnr-prod__media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="fnr-prod__body">
                  <h4 className="fnr-prod__title">{p.name}</h4>
                  <div className="fnr-prod__meta">
                    <span className="fnr-price">{p.price}</span>
                    <a
                      href="/cart"
                      className="fnr-btn fnr-btn--sm fnr-btn--solid"
                    >
                      Add
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) PROMO SPLIT */}
      <section className="fnr-promos fnr-container">
        <a
          className="fnr-promo fnr-promo--left"
          href="/packages/living-bundles"
        >
          <img
            src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop"
            alt="Living room package"
          />
          <div className="fnr-promo__text">
            <h3>Living bundles</h3>
            <p>Save up to 25% on curated sets.</p>
            <span className="fnr-link">Shop bundles →</span>
          </div>
        </a>
        <a
          className="fnr-promo fnr-promo--right"
          href="/packages/bedroom-refresh"
        >
          <img
            src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop"
            alt="Bedroom refresh"
          />
          <div className="fnr-promo__text">
            <h3>Bedroom refresh</h3>
            <p>Layered linens and calm palettes.</p>
            <span className="fnr-link">Explore now →</span>
          </div>
        </a>
      </section>

      {/* 5) INSPIRATION + NEWSLETTER */}
      <section className="fnr-inspo fnr-container">
        <header className="fnr-section-head">
          <h2>Inspiration</h2>
          <a href="/magazine" className="fnr-link">
            Read the magazine
          </a>
        </header>
        <div className="fnr-inspo-grid">
          {inspirations.map((i) => (
            <article key={i.title} className="fnr-inspo-card">
              <img src={i.image} alt={i.title} loading="lazy" />
              <div className="fnr-inspo-card__text">
                <h4>{i.title}</h4>
              </div>
            </article>
          ))}
        </div>

        <div className="fnr-nl">
          <div className="fnr-nl__body">
            <h3>Get 10% off your first order</h3>
            <p>Join our list for new drops, room guides, and weekly offers.</p>
          </div>
          <form className="fnr-nl__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="email"
              required
            />
            <button className="fnr-btn fnr-btn--solid" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
