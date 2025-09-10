import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeSlider.css";

/** يرندر <Link> داخلي و <a> خارجي */
function LinkOrA({ to, children, className, ariaLabel }) {
  const isExternal = /^https?:\/\//i.test(to);
  return isExternal ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <Link to={to} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

const slides = [
  {
    id: 1,
    title: "Up To 40% off",
    subtitle: "Body Lotion spf lab 50+ PA++++",
    buttonText: "SHOP NOW",
    image:
      "https://img.freepik.com/premium-photo/there-is-man-standing-mountain-overlooking-beautiful-landscape_1034059-82957.jpg?w=1480",
    link: "/Categories",
  },
  {
    id: 2,
    title: "Mega Offer",
    subtitle: "Organic Face",
    buttonText: "SHOP NOW",
    image:
      "https://img.freepik.com/free-photo/anime-japanese-character_23-2151478178.jpg?t=st=1755999453~exp=1756003053~hmac=2566ad8d75bf86d65647bc2d0cb8a8d71f1f5a7b6a9390c3d3947715941c32f7&w=1480",
    link: "/collections/organic-face",
  },
  {
    id: 3,
    title: "Special Deal",
    subtitle: "Organic Serum Buy 1 Get 1",
    buttonText: "SHOP NOW",
    image:
      "https://img.freepik.com/premium-photo/knight-girl-medieval-illustration-desktop-background_1022029-125949.jpg?w=1480",
    link: "/products/organic-serum",
  },
  {
    id: 4,
    title: "Welcome",
    subtitle: "Buy 1 Get 1",
    buttonText: "SHOP NOW",
    image:
      "https://img.freepik.com/premium-photo/skeleton-with-hat-that-says-death-it_1022029-109227.jpg?w=1480",
    link: "/offers/bogo",
  },
];

const rightCards = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/hacker-standing-dark_1150-19266.jpg?t=st=1756999372~exp=1757002972~hmac=5c15e279191d9d7bea8f1ba187d86840960c03f778981157aa84ec6f3fef0016&w=1480",
    title: "BLACK FRIDAY",
    subtitle: "Big Sale Eyeshadow",
    link: "/Furniture",
  },
  {
    id: 2,
    image:
      "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/banner1-demo1.jpg",
    title: "NEW COLLECTION",
    subtitle: "Puffer Jacket 30% off",
    link: "/Cosmetics",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hb">
      {/* اليسار: السلايدر */}
      <div className="hb__slider">
        <div
          className="hb__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              className={`hb__slide ${current === idx ? "is-active" : ""}`}
              key={slide.id}
            >
              <LinkOrA
                to={slide.link}
                className="hb__mediaLink"
                ariaLabel={`${slide.title} - افتح الصفحة`}
              >
                <img
                  className="hb__img"
                  src={slide.image}
                  alt={slide.subtitle}
                />
              </LinkOrA>

              <div className="hb__caption">
                <p className="hb__eyebrow">{slide.title}</p>
                <h2 className="hb__headline">{slide.subtitle}</h2>
                <LinkOrA
                  to={slide.link}
                  className="hb-btn hb-btn--pill hb-btn--brand"
                  ariaLabel={`اذهب إلى ${slide.subtitle}`}
                >
                  {slide.buttonText}
                </LinkOrA>
              </div>
            </div>
          ))}
        </div>

        <div className="hb__dots" role="tablist" aria-label="hero slider dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hb__dot ${current === index ? "is-active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`اذهب إلى السلايد رقم ${index + 1}`}
              aria-selected={current === index}
            />
          ))}
        </div>
      </div>

      {/* اليمين: الكروت */}
      <div className="hb__side">
        {rightCards.map((card) => (
          <div className="hb__tile" key={card.id}>
            <LinkOrA
              to={card.link}
              className="hb__mediaLink"
              ariaLabel={`${card.title} - افتح القسم`}
            >
              <img
                className="hb__tileImg"
                src={card.image}
                alt={card.subtitle}
              />
            </LinkOrA>
            <div className="hb__tileText">
              <p className="hb__kicker">{card.title}</p>
              <h3 className="hb__subhead">{card.subtitle}</h3>
              <LinkOrA
                to={card.link}
                className="hb-btn hb-btn--ghost hb-btn--light hb-btn--sm"
                ariaLabel={`اذهب إلى ${card.subtitle}`}
              >
                SHOP NOW
              </LinkOrA>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
