import React from "react";
import { Link } from "react-router-dom";
import { sections } from "../Mobile/MobileData";
import "./Mobile.css";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";

function ItemCard({ item }) {
  return (
    <article className="em-card" role="article" aria-label={item.title}>
      {item.discount && (
        <span className="em-badge-discount">-{item.discount}%</span>
      )}
      {item.tag && <span className="em-badge-tag">{item.tag}</span>}

      <figure className="em-media">
        <img src={item.image} alt={item.title} loading="lazy" />
      </figure>

      <div className="em-body">
        <h3 className="em-title">{item.title}</h3>
        <p className="em-meta">{item.meta}</p>

        <div className="em-pricing">
          <span className="em-price">
            {item.price} <span className="em-currency">ج.م</span>
          </span>
          {item.oldPrice && (
            <span className="em-oldprice">{item.oldPrice} ج.م</span>
          )}
        </div>

        <AddToCartButton
          item={item}
          className="em-btn-add"
          label="أضِف إلى السلة"
        />
      </div>
    </article>
  );
}

function SectionGrid({ id, title, subtitle, items, limit }) {
  const featured = items.filter((it) => it.featured === true);
  const base = featured.length ? featured : items;
  const list = typeof limit === "number" ? base.slice(0, limit) : base;

  return (
    <section id={id} className="em-section" aria-labelledby={`${id}-title`}>
      <header className="em-head">
        <div>
          <h2 id={`${id}-title`} className="em-h2">
            {title}
          </h2>
          {subtitle && <p className="em-subtitle">{subtitle}</p>}
        </div>

        {/* ← هنا كان الخطأ: استخدم Link بدل href="#!" */}
        <Link
          className="em-viewall"
          to={`/mobilep/${id}`}
          aria-label={`تصفح المزيد من ${title}`}
        >
          عرض الكل
        </Link>
      </header>

      <div className="em-grid">
        {list.map((it, idx) => (
          <ItemCard key={`${it.id}-${idx}`} item={it} />
        ))}
      </div>
    </section>
  );
}

export default function Mobile() {
  return (
    <main className="sm-page" dir="rtl">
      <div className="sm-hero">
        <h1 className="sm-h1">phone store </h1>
        <nav className="sm-nav" aria-label="تصفح الأقسام">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="sm-navlink">
              {s.title}
            </a>
          ))}
        </nav>
      </div>

      {sections.map((s) => (
        <SectionGrid
          key={s.id}
          id={s.id}
          title={s.title}
          subtitle={s.subtitle}
          items={s.items}
          limit={s.homeLimit ?? 4}
        />
      ))}
    </main>
  );
}
