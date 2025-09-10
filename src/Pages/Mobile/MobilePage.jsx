import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { sections, allItems } from "../Mobile/MobileData";
import { useCart } from "../../Context/useCart";
import "./Mobile.css";

function Card({ item }) {
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
        {item.meta && <p className="sm-meta">{item.meta}</p>}
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
          onClick={(e) => {
            e.preventDefault();
            addToCart({
              id: item.sku ?? item.id, // لو عندك sku استخدمه
              title: item.title,
              price: Number(item.price),
              image: item.image,
            });
            open?.();
          }}
        >
          أضِف إلى السلة
        </button>
      </div>
    </article>
  );
}

export default function MarketPage() {
  const { sectionId } = useParams();

  const { pageTitle, items } = useMemo(() => {
    if (!sectionId) return { pageTitle: "كل المنتجات", items: allItems };
    const sec = sections.find((s) => s.id === sectionId);
    return sec
      ? { pageTitle: sec.title, items: sec.items }
      : { pageTitle: "القسم غير موجود", items: [] };
  }, [sectionId]);

  return (
    <main className="sm-page" dir="rtl">
      <div className="sm-hero">
        <h1 className="sm-h1">{pageTitle}</h1>
        <nav className="sm-breadcrumbs">
          <Link to="/" className="sm-navlink">
            الرئيسية
          </Link>
          <span> / </span>
          <Link to="/mobilep" className="sm-navlink">
            السوبر ماركت
          </Link>
          {sectionId && (
            <>
              <span> / </span>
              <span>{pageTitle}</span>
            </>
          )}
        </nav>
      </div>

      <div className="sm-grid">
        {items.map((it, idx) => (
          <Card key={`${it.sku ?? it.id}-${idx}`} item={it} />
        ))}
      </div>
    </main>
  );
}
