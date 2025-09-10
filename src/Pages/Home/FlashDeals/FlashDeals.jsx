import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./FlashDeals.css";
import AddToCartButton from "../../../Components/AddToCartButton/AddToCartButton";

const products = [
  {
    id: 1,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-30-6-300x300.jpg",
    title: "Laptop Asus Vivobook I5 1355U, 8GB RAM, 512GB SSD",
    price: 999,
    oldPrice: 1536,
    discount: "-35%",
    rating: 4.5,
  },
  {
    id: 2,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-14-2-300x300.jpg",
    title: "Apple Watch Series 9 GPS 45mm, Aluminum Case",
    price: 890,
    oldPrice: 950,
    discount: "-6%",
    rating: 4.5,
  },
  {
    id: 3,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/automotive-11-300x300.jpg",
    title: "TOOLS 34 Low Profile Hydraulic Trolley",
    price: 767,
    oldPrice: 837,
    discount: "-8%",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-10-1-300x300.jpg",
    title: "14-inch Fasion Simplicity Quality Wall Clock, Home…",
    price: 50,
    oldPrice: 75,
    discount: "-33%",
    rating: 4.5,
  },
  {
    id: 5,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/cosmetics-40-1-300x300.jpg",
    title: "Allure Luminous Intense Lipstick 0.15oz",
    price: 20,
    oldPrice: 24,
    discount: "-17%",
    rating: 5,
  },
  {
    id: 6,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/cosmetic-2-300x300.jpg",
    title: "Translucent Compact Face Powder – 03 Medium, 0.22oz",
    price: 9,
    oldPrice: 14,
    discount: "-37%",
    rating: 4.5,
  },
  {
    id: 7,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/cosmetics-33-300x300.jpg",
    title: "Tonga on T-Shirt for Men, Women Short Sleeve Tee",
    price: 43,
    oldPrice: 5,
    discount: "33%",
    rating: 4,
  },

  // تكرارات (عادي كداتا تجريبية)
  {
    id: 8,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-14-2-300x300.jpg",
    title: "Apple Watch Series 9 GPS 45mm, Aluminum Case",
    price: 890,
    oldPrice: 950,
    discount: "-6%",
    rating: 4.5,
  },
  {
    id: 9,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/automotive-11-300x300.jpg",
    title: "TOOLS 34 Low Profile Hydraulic Trolley",
    price: 767,
    oldPrice: 837,
    discount: "-8%",
    rating: 5,
  },
  {
    id: 10,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-10-1-300x300.jpg",
    title: "14-inch Fasion Simplicity Quality Wall Clock, Home…",
    price: 50,
    oldPrice: 75,
    discount: "-33%",
    rating: 4.5,
  },
  {
    id: 11,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/cosmetics-40-1-300x300.jpg",
    title: "Allure Luminous Intense Lipstick 0.15oz",
    price: 20,
    oldPrice: 24,
    discount: "-17%",
    rating: 5,
  },
  {
    id: 12,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/cosmetic-2-300x300.jpg",
    title: "Translucent Compact Face Powder – 03 Medium, 0.22oz",
    price: 9,
    oldPrice: 14,
    discount: "-37%",
    rating: 4.5,
  },
  {
    id: 13,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/cosmetics-33-300x300.jpg",
    title: "Tonga on T-Shirt for Men, Women Short Sleeve Tee",
    price: 43,
    oldPrice: 5,
    discount: "33%",
    rating: 4,
  },
];

function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++)
    stars.push(<span key={i}>{rating >= i ? "★" : "☆"}</span>);
  return <div className="stars">{stars}</div>;
}

export default function FlashDeals() {
  // 👇 احسب عدد الكروت الظاهرة حسب العرض
  const getVisible = () =>
    window.innerWidth <= 425
      ? 1
      : window.innerWidth <= 768
      ? 2
      : window.innerWidth <= 1200
      ? 3 // 👈 بدل 3 إلى 2
      : 5;

  const [visibleCount, setVisibleCount] = useState(getVisible());
  const [start, setStart] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // لو العرض اتغيّر، خزّل start عشان ما يطلعش برّه
  useEffect(() => {
    setStart((s) => Math.min(s, Math.max(0, products.length - visibleCount)));
  }, [visibleCount]);

  const end = start + visibleCount;
  const canPrev = start > 0;
  const canNext = end < products.length;

  // مؤقت 16:08:20
  const [timeLeft, setTimeLeft] = useState(16 * 3600 + 8 * 60 + 20);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);

  const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");

  const handlePrev = () => canPrev && setStart((v) => v - 1);
  const handleNext = () => canNext && setStart((v) => v + 1);

  return (
    <section className="flash-deals-section">
      <div className="flash-deals-header">
        <h2>Flash Deals</h2>

        <div className="header-right">
          <div className="flash-timer">
            <span className="ends-in">Ends in</span>
            <div className="timer-circles">
              <span className="pill">{h}</span>
              <span className="sep">:</span>
              <span className="pill">{m}</span>
              <span className="sep">:</span>
              <span className="pill">{s}</span>
            </div>
          </div>

          <div className="v-sep" />

          <button className="see-all" onClick={() => navigate("/Categories")}>
            See All Products
          </button>
        </div>
      </div>

      <div className="flash-deals-slider">
        <button
          aria-label="Previous"
          className={`side-arrow left ${!canPrev ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={!canPrev}
        >
          ‹
        </button>

        {/* بنسلكت الجزء المطلوب بس */}
        <div className="flash-products-list">
          {products.slice(start, end).map((p, idx) => {
            const globalIndex = start + idx;
            const detailsState = {
              product: {
                img: p.image,
                image: p.image,
                title: p.title,
                price: `$${p.price}`,
                desc: `Limited-time deal: ${p.discount || ""}`.trim(),
                oldPrice: p.oldPrice,
                rating: p.rating,
                discount: p.discount,
                id: `flash-${globalIndex}`,
              },
            };

            return (
              <article
                className="flash-product-card"
                key={`flash-${globalIndex}-${p.title}`}
              >
                <div className="flash-product-media">
                  {p.discount && (
                    <div className="discount-badge">{p.discount}</div>
                  )}

                  <Link
                    to={`/product/flash-${globalIndex}`}
                    state={detailsState}
                  >
                    <img src={p.image} alt={p.title} className="flash-img" />
                  </Link>

                  <ul
                    className="hover-actions"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <li
                      title="Wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Wishlist:", p.title);
                      }}
                    >
                      ♡
                    </li>
                    <li
                      title="Compare"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Compare:", p.title);
                      }}
                    >
                      ⇄
                    </li>
                    <li
                      title="Quick View"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log("Quick View:", p.title);
                      }}
                    >
                      🔍
                    </li>
                    <li
                      title="Add to cart"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <AddToCartButton
                        item={{
                          id: `flash-${globalIndex}`,
                          title: p.title,
                          price: p.price,
                          image: p.image,
                        }}
                        className="icon-btn"
                        label="🛒"
                      />
                    </li>
                  </ul>
                </div>

                <div className="flash-product-info">
                  <h3 className="flash-product-title">{p.title}</h3>

                  <div className="flash-product-prices">
                    <span className="flash-price">${p.price}</span>
                    {!!p.oldPrice && (
                      <span className="flash-old-price">${p.oldPrice}</span>
                    )}
                  </div>

                  <RatingStars rating={p.rating} />
                </div>
              </article>
            );
          })}
        </div>

        <button
          aria-label="Next"
          className={`side-arrow right ${!canNext ? "disabled" : ""}`}
          onClick={handleNext}
          disabled={!canNext}
        >
          ›
        </button>
      </div>
    </section>
  );
}
