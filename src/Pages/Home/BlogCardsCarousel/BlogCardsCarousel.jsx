// BlogCardsCarousel.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./BlogCardsCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogData as baseBlogData } from "./BlogData";

// نفس البريك بوينتس بتاعة الـ CSS
const getCPV = (w) => (w < 600 ? 1 : w < 992 ? 2 : 3);
const STEP = 1;

export default function BlogCardsCarousel() {
  const [cardsPerView, setCardsPerView] = useState(getCPV(window.innerWidth));
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const wrapRef = useRef(null);
  const rowRef = useRef(null);

  const [containerW, setContainerW] = useState(0);
  const [gapPx, setGapPx] = useState(24);

  const recalc = () => {
    const w = wrapRef.current?.clientWidth || window.innerWidth;
    setCardsPerView(getCPV(w));
    setContainerW(wrapRef.current?.clientWidth || 0);
    if (rowRef.current)
      setGapPx(parseFloat(getComputedStyle(rowRef.current).gap) || 24);
  };

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc, { passive: true });
    return () => window.removeEventListener("resize", recalc);
  }, []);

  // NB: استخدمنا baseBlogData هنا
  const { extended, tailClones, baseLen } = useMemo(() => {
    const head = baseBlogData.slice(0, cardsPerView);
    const tail = baseBlogData.slice(-cardsPerView);
    return {
      extended: [...tail, ...baseBlogData, ...head],
      tailClones: tail.length,
      baseLen: baseBlogData.length,
    };
  }, [cardsPerView]);

  useEffect(() => {
    setAnimate(false);
    setIndex(tailClones);
    requestAnimationFrame(() => setAnimate(true));
  }, [tailClones]);

  const cardW =
    cardsPerView > 0
      ? (containerW - gapPx * (cardsPerView - 1)) / cardsPerView
      : 0;
  const stepPX = cardW + gapPx;
  const translateX = -(index * stepPX);

  const goTo = (i) => setIndex(i);
  const next = () => goTo(index + STEP);
  const prev = () => goTo(index - STEP);

  const onTransitionEnd = () => {
    let i = index;
    let jump = false;
    if (index >= baseLen + tailClones) {
      i = tailClones + ((index - (baseLen + tailClones)) % baseLen);
      jump = true;
    } else if (index < tailClones) {
      const offset = (tailClones - index) % baseLen;
      i = baseLen + tailClones - offset;
      jump = true;
    }
    if (jump) {
      setAnimate(false);
      setIndex(i);
      requestAnimationFrame(() => setAnimate(true));
    }
  };

  const leftVisible = index;
  const rightVisible = index + (cardsPerView - 1);

  return (
    <div className="blog-carousel-container">
      <div className="title-row">
        <h1 className="blog-carousel-title">From Our Blog</h1>
      </div>

      <div className="carousel-wrapper" ref={wrapRef}>
        <div
          ref={rowRef}
          className="blog-cards-row"
          style={{
            transform: `translateX(${
              Number.isFinite(translateX) ? translateX : 0
            }px)`,
            transition: animate
              ? "transform 0.55s cubic-bezier(0.6, 0.07, 0.26, 0.95)"
              : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extended.map((card, i) => {
            const showLeftArrow = i === leftVisible;
            const showRightArrow = i === rightVisible;
            return (
              <div className="blog-card" key={`${card.title}-${i}`}>
                <div className="blog-card-img-wrapper">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="blog-card-img"
                  />
                  {showLeftArrow && (
                    <button
                      className="card-arrow left"
                      onClick={prev}
                      aria-label="Previous"
                    >
                      <FaChevronLeft />
                    </button>
                  )}
                  {showRightArrow && (
                    <button
                      className="card-arrow right"
                      onClick={next}
                      aria-label="Next"
                    >
                      <FaChevronRight />
                    </button>
                  )}
                </div>

                <div className="blog-card-meta">
                  <span className="blog-card-category">{card.category}</span>
                  <span className="blog-card-sep">—</span>
                  <span className="blog-card-author">By {card.author}</span>
                </div>
                <div className="blog-card-title">{card.title}</div>
                <div className="blog-card-desc">{card.desc}</div>

                <Link
                  to={`/Blog/${card.slug}`}
                  state={{ card }}
                  className="blog-card-btn"
                >
                  READ MORE
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
