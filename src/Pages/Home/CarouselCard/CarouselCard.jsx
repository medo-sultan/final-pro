import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./CarouselCard.css";

const carouselData = [
  {
    title: "Athletics Embroidered Relaxed Hoodie",
    features: ["64% cotton, 36% polyester", "Do not dry clean", "Machine wash"],
    oldPrice: 120,
    price: 89,
    discount: 30,
    images: [
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-1.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-2.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-3.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-4.png",
    ],
  },
  {
    title: "Summer Fashion Hoodie",
    features: ["80% cotton, 20% polyester", "No bleach", "Air dry only"],
    oldPrice: 110,
    price: 77,
    discount: 20,
    images: [
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-2.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-1.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-3.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-4.png",
    ],
  },
  {
    title: "Autumn Picks Hoodie",
    features: ["70% cotton, 30% polyester", "Hand wash", "No iron"],
    oldPrice: 99,
    price: 74,
    discount: 25,
    images: [
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-3.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-2.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-1.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-4.png",
    ],
  },
  {
    title: "Winter Warmers Hoodie",
    features: [
      "90% cotton, 10% polyester",
      "Dry clean only",
      "Do not tumble dry",
    ],
    oldPrice: 150,
    price: 105,
    discount: 30,
    images: [
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-4.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-1.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-2.png",
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide-hoodie-3.png",
    ],
  },
];

export default function CarouselCard() {
  const [current, setCurrent] = useState(0);
  const [mainImageIdx, setMainImageIdx] = useState(0);

  useEffect(() => setMainImageIdx(0), [current]);

  const item = carouselData[current];
  const { title, features, oldPrice, price, discount, images } = item;

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }),
    []
  );

  const crops = useMemo(
    () => [
      { x: "50%", y: "12%" },
      { x: "50%", y: "10%" },
      { x: "50%", y: "14%" },
      { x: "50%", y: "12%" },
    ],
    []
  );
  const crop = crops[mainImageIdx] || { x: "50%", y: "12%" };

  const handleNext = useCallback(
    () => setCurrent((p) => (p + 1) % carouselData.length),
    []
  );
  const handlePrev = useCallback(
    () => setCurrent((p) => (p === 0 ? carouselData.length - 1 : p - 1)),
    []
  );
  const onThumbClick = useCallback((i) => setMainImageIdx(i), []);

  return (
    <div className="carousel-outer-bg">
      <div className="carousel-card-row">
        <div className="carousel-left">
          <div className="bg-word">Hoodie</div>

          <div className="main-img-wrapper">
            <img
              src={images[mainImageIdx]}
              alt={`${title} – view ${mainImageIdx + 1}`}
              className="main-img"
              loading="eager"
              style={{ "--x": crop.x, "--y": crop.y }}
            />
            <div className="discount-circle">-{discount}%</div>
          </div>
        </div>

        <div className="carousel-right">
          <div className="carousel-card-box">
            <h2 className="carousel-title">{title}</h2>

            <ul className="feature-list">
              {features.map((f) => (
                <li key={f}>
                  <span className="checkmark">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            <hr className="divider" />

            <div className="price-row" aria-live="polite">
              <span className="price">{fmt.format(price)}</span>
              <span className="old-price">{fmt.format(oldPrice)}</span>
            </div>

            <div className="thumbnails">
              {images.map((img, idx) => (
                <button
                  key={img}
                  className={`thumb-btn ${
                    mainImageIdx === idx ? "active" : ""
                  }`}
                  onClick={() => onThumbClick(idx)}
                  aria-label={`عرض الصورة ${idx + 1}`}
                  type="button"
                >
                  <img
                    src={img}
                    alt={`thumbnail ${idx + 1}`}
                    className="thumb-img"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            <button className="buy-btn" type="button">
              BUY NOW
            </button>

            <div className="nav-arrows">
              <button
                className="nav-btn"
                onClick={handlePrev}
                aria-label="السابق"
                type="button"
              >
                &lt;
              </button>
              <button
                className="nav-btn"
                onClick={handleNext}
                aria-label="التالي"
                type="button"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
