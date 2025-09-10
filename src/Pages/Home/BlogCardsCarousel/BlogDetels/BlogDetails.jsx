// src/BlogDetail.jsx
import React, { useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import "./BlogDetails.css";
import { BlogData } from "../BlogData";
import CashBackBanner from "../../../../Components/CashBackBanner/CashBackBanner";
import FlashDeals from "../../FlashDeals/FlashDeals";

export default function BlogDetail() {
  const { slug } = useParams();
  const location = useLocation();

  // ← رجّع لأعلى عند فتح/تغيير المقال (إلا لو في hash)
  useEffect(() => {
    if (!location.hash) {
      // خطوة rAF صغيرة تمنع أي قفزة ناتجة عن الصور/الـCLS
      requestAnimationFrame(() => {
        // تعطيل مؤقت للـ smooth لو مفعّله عالمياً
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        window.scrollTo({ top: 0, left: 0 });
        html.style.scrollBehavior = prev;
      });
    }
  }, [slug, location.hash]);

  // لو جايين من الكاروسيل هنلاقي card في state
  let card = location.state?.card;

  // لو حد دخل الرابط مباشرة
  if (!card && slug) {
    card = BlogData.find((b) => b.slug === slug) || null;
  }

  if (!card) {
    return (
      <div className="blog-detail">
        <p>المقال غير موجود.</p>
        <Link to="/" className="back-link">
          الرجوع
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="detail-hero">
        <img src={card.img} alt={card.title} className="detail-hero-img" />
      </div>

      <div className="detail-content">
        <div className="detail-meta">
          <span className="detail-category">{card.category}</span>
          <span className="detail-sep">—</span>
          <span className="detail-author">By {card.author}</span>
        </div>

        <h1 className="detail-title">{card.title}</h1>
        <p className="detail-desc">{card.desc}</p>
      </div>
      <Link to="/" className="back-link">
        ← رجوع للمدونة
      </Link>
      <CashBackBanner />
      <FlashDeals />
    </div>
  );
}
