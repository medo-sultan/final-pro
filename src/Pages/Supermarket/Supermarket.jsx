import { Link } from "react-router-dom";
import { useCart } from "../../Context/useCart";
import { sections } from "../Supermarket/supermarketData"; // ← بدل الـ array الداخلي
import "./Supermarket.css";

function ItemCard({ item }) {
  const { addToCart, open } = useCart();

  return (
    <article className="sm-card" role="article" aria-label={item.title}>
      {item.discount && (
        <span className="sm-badge-discount">-{item.discount}%</span>
      )}

      <figure className="sm-media">
        <img src={item.image} alt={item.title} loading="lazy" />
      </figure>

      <div className="sm-body">
        <h3 className="sm-title">{item.title}</h3>
        <p className="sm-meta">{item.meta}</p>

        <div className="sm-pricing">
          <span className="sm-price">
            {item.price} <span className="sm-currency">ج.م</span>
          </span>
          {item.oldPrice && (
            <span className="sm-oldprice">{item.oldPrice} ج.م</span>
          )}
        </div>

        <button
          type="button"
          className="sm-btn-add"
          aria-label={`أضِف ${item.title} إلى السلة`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart({
              id: item.id,
              title: item.title,
              price: Number(item.price),
              image: item.image,
              variant: item.variant || item.color || item.size,
              brand: item.brand,
            });
            open?.(); // افتح درج/سلة إن وجد
          }}
        >
          أضِف إلى السلة
        </button>
      </div>
    </article>
  );
}

function SectionGrid({ id, title, subtitle, items, limit }) {
  // لو فيه featured هنستخدمه؛ لو مفيش، نعرض أول limit عناصر
  const featured = items.filter((it) => it.featured === true);
  const base = featured.length > 0 ? featured : items;
  const list = typeof limit === "number" ? base.slice(0, limit) : base;

  return (
    <section id={id} className="sm-section" aria-labelledby={`${id}-title`}>
      <header className="sm-head">
        <div>
          <h2 id={`${id}-title`} className="sm-h2">
            {title}
          </h2>
          {subtitle && <p className="sm-subtitle">{subtitle}</p>}
        </div>

        <Link className="sm-viewall" to={`/market/${id}`}>
          عرض الكل ({items.length})
        </Link>
      </header>

      <div className="sm-grid">
        {list.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}

export default function Supermarket() {
  return (
    <main className="sm-page" dir="rtl">
      <div className="sm-hero">
        <h1 className="sm-h1">سوبر ماركت</h1>
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
