import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchHero.css";

export default function SearchHero() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const tags = [
    { label: "smartphone", link: "/Mobile" },
    { label: "tablet", link: "/Furniture" },
    { label: "controller", link: "/MAN" },
    { label: "furniture", link: "/WOMAN" },
    { label: "playstation", link: "/GameBoy" },
    { label: "Autopart", link: "/autopart" },
    { label: " Books", link: "/Book" },
    { label: "Cosmetics", link: "/cosmetics" },
    { label: "camera", link: "/products/cameras" },
  ];

  // مثال بسيط: بدّلها باستعلام حقيقي للباك إند
  const isAvailable = async (q) => {
    const catalog = ["smartphone", "laptop", "camera", "Autopart"]; // مثال
    return catalog.some((x) => q.toLowerCase().includes(x.toLowerCase()));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const ok = await isAvailable(query.trim());
    if (ok) {
      // وجّه لصفحة النتائج الطبيعية عندك
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    } else {
      // مش موجود → وجّه لصفحة الطلب الخاص ومعاه الاستعلام
      navigate("/request-item", { state: { query: query.trim() } });
    }
  };

  return (
    <section className="search-hero">
      <div className="search-hero__inner">
        <h1 className="search-hero__title">Looking for something else?</h1>

        <form
          className="search-hero__form"
          role="search"
          aria-label="Product search"
          onSubmit={onSubmit}
        >
          <input
            className="search-hero__input"
            type="search"
            placeholder="Search for products..."
            aria-label="Search for products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="search-hero__btn"
            type="submit"
            aria-label="Search"
          >
            <svg
              className="search-hero__icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M21.53 20.47l-4.8-4.8a8 8 0 10-1.06 1.06l4.8 4.8a.75.75 0 101.06-1.06zM4.5 10a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>

        <ul className="search-hero__tags" aria-label="Popular categories">
          {tags.map((tag, i) => (
            <li key={i} className="search-hero__tag">
              <Link to={tag.link}>{tag.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
