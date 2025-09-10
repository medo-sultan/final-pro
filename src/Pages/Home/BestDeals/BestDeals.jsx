import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BestDeals.css";
import AddToCartButton from "../../../Components/AddToCartButton/AddToCartButton";

const products = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-vector/realistic-smartphone-device_52683-29765.jpg?w=1480",
    title: "Laptop Asus Vivobook I5 1355U, 8GB RAM, 512GB SSD",
    price: 999,
    oldPrice: 1536,
    discount: "-35%",
    rating: 4.5,
  },
  {
    id: 2,
    image:
      "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-5-700x700.jpg",
    title: "Apple Watch Series 9 GPS 45mm, Aluminum Case",
    price: 890,
    oldPrice: 950,
    discount: "-6%",
    rating: 4.5,
  },
  {
    id: 3,
    image:
      "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-6-700x700.jpg",
    title: "TOOLS 34 Low Profile Hydraulic Trolley",
    price: 767,
    oldPrice: 837,
    discount: "-8%",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/automotive-13-700x700.jpg",
    title: "14-inch Fasion Simplicity Quality Wall Clock, Home…",
    price: 50,
    oldPrice: 75,
    discount: "-33%",
    rating: 4.5,
  },
  {
    id: 5,
    image:
      "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-30-5-700x700.jpg",
    title: "Allure Luminous Intense Lipstick 0.15oz",
    price: 20,
    oldPrice: 24,
    discount: "-17%",
    rating: 5,
  },
  {
    id: 6,
    image:
      "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-20-700x700.jpg",
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
  {
    id: 8,
    image:
      "https://img.freepik.com/premium-photo/close-up-lamp-against-white-background_1048944-27152611.jpg?w=1480",
    title: "Minimal Desk Lamp – Matte Black",
    price: 43,
    oldPrice: 59,
    discount: "-27%",
    rating: 4,
  },
];

function RatingStars({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++)
    stars.push(<span key={i}>{rating >= i ? "★" : "☆"}</span>);
  return <div className="stars">{stars}</div>;
}

export default function BestDeals() {
  const [start, setStart] = useState(0);
  const visibleCount = 5;
  const end = start + visibleCount;
  const canPrev = start > 0;
  const canNext = end < products.length;
  const navigate = useNavigate();
  const handlePrev = () => canPrev && setStart((v) => v - 1);
  const handleNext = () => canNext && setStart((v) => v + 1);

  return (
    <section className="flash-deals-section">
      <div className="flash-deals-header">
        <h2>Best Selling</h2>
        <div className="header-right">
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

        <div className="flash-products-list">
          {products.slice(start, end).map((p) => {
            const detailsState = {
              product: {
                img: p.image, // ProductDetails يتوقع img
                title: p.title,
                price: `$${p.price}`,
                desc: `Best deal${p.discount ? `: ${p.discount}` : ""}`,
                oldPrice: p.oldPrice,
                rating: p.rating,
                discount: p.discount,
                id: `best-${p.id}`,
              },
            };

            return (
              <article className="flash-product-card" key={`best-${p.id}`}>
                <div className="flash-product-media">
                  {p.discount && (
                    <div className="discount-badge">{p.discount}</div>
                  )}

                  {/* صورة المنتج: تفتح صفحة التفاصيل */}
                  <Link to={`/product/best-${p.id}`} state={detailsState}>
                    <img src={p.image} alt={p.title} />
                  </Link>

                  {/* الأكشنات العائمة — توقف فتح اللينك */}
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
                        // افتح Modal هنا لو حابب
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
                          id: `best-${p.id}`,
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
