import React, { useEffect, useMemo, useState } from "react";
import "./Cosmetics.css";

export default function CosmeticsPro({
  brand = "#e11d48",
  accent = "#a855f7",
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products = [
    {
      id: 1,
      name: "أحمر شفاه مات طويل الثبات",
      brand: "Fenty",
      category: "مكياج",
      price: 980,
      originalPrice: 1200,
      rating: 4.6,
      tags: ["حصري"],
      gift: true,
      image:
        "https://img.freepik.com/free-photo/front-view-red-lipstick-made-black-chrome-plastic_140725-13879.jpg?t=st=1756264751~exp=1756268351~hmac=6153ce7be87d82158abc11389da4662b7b8235b3037194aca1265f69bbacd5f6&w=1480",
    },
    {
      id: 2,
      name: "فاونديشن تغطية متوسطة بإضاءة",
      brand: "NARS",
      category: "مكياج",
      price: 1650,
      originalPrice: 1650,
      rating: 4.7,
      tags: ["جديد"],
      gift: false,
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1500&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "بلاشر كريمي طبيعي",
      brand: "Rare Beauty",
      category: "مكياج",
      price: 890,
      originalPrice: 990,
      rating: 4.5,
      tags: [],
      gift: false,
      image:
        "https://img.freepik.com/free-photo/flat-lay-foundation-containers-arrangement_23-2149511267.jpg?t=st=1756265276~exp=1756268876~hmac=072db720b86cc22cf863871269dd4ad90f48708e04a9b0238b40f01d5ce020b6&w=1480",
    },
    {
      id: 4,
      name: "سيروم فيتامين C تفتيح وإشراقة",
      brand: "The Ordinary",
      category: "العناية بالبشرة",
      price: 720,
      originalPrice: 820,
      rating: 4.4,
      tags: ["الأكثر_مبيعًا"],
      gift: false,
      image:
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1500&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "مرطب جل بالهيالورونيك أسيد",
      brand: "CeraVe",
      category: "العناية بالبشرة",
      price: 540,
      originalPrice: 640,
      rating: 4.3,
      tags: [],
      gift: false,
      image:
        "https://img.freepik.com/free-photo/product-container-underwater-still-life_23-2150434855.jpg?t=st=1756265101~exp=1756268701~hmac=6c51d013f9dd87a90ed742f6283f0a8ccf2094fa202684719d8b203d994354b9&w=1480",
    },
    {
      id: 6,
      name: "عطر أو دو برفيوم عنبر وفانيلا 50مل",
      brand: "YSL",
      category: "عطور",
      price: 3450,
      originalPrice: 3890,
      rating: 4.8,
      tags: ["حصري"],
      gift: true,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1500&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "عطر زهري فواكه 90مل",
      brand: "Dior",
      category: "عطور",
      price: 5200,
      originalPrice: 5200,
      rating: 4.9,
      tags: ["مميز"],
      gift: false,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1500&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "شامبو إصلاح للتقصف 250مل",
      brand: "Olaplex",
      category: "الشعر",
      price: 980,
      originalPrice: 1100,
      rating: 4.6,
      tags: [],
      gift: false,
      image:
        "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1500&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "ماسك ترطيب عميق للشعر",
      brand: "Kérastase",
      category: "الشعر",
      price: 1550,
      originalPrice: 1750,
      rating: 4.7,
      tags: ["الأكثر_مبيعًا"],
      gift: false,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1500&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "باليت ظلال 12 لون نيود",
      brand: "Huda Beauty",
      category: "مكياج",
      price: 2350,
      originalPrice: 2590,
      rating: 4.6,
      tags: ["حصري"],
      gift: false,
      image:
        "https://img.freepik.com/free-photo/top-view-eye-shadow-palette_23-2148306688.jpg?t=st=1756264836~exp=1756268436~hmac=82091f07618dadb17682d2d1bef5300dec6cb459f43c270c89a67adb8effe1de&w=1480",
    },
    {
      id: 11,
      name: "غسول رغوي للبشرة المختلطة",
      brand: "La Roche-Posay",
      category: "العناية بالبشرة",
      price: 430,
      originalPrice: 530,
      rating: 4.2,
      tags: [],
      gift: false,
      image:
        "https://img.freepik.com/premium-photo/woman-applying-cleansing-foam-onto-hand-white-background-closeup_1339860-194.jpg?w=1480",
    },
    {
      id: 12,
      name: "برايمر مطفي لتثبيت المكياج",
      brand: "Benefit",
      category: "مكياج",
      price: 990,
      originalPrice: 1250,
      rating: 4.4,
      tags: ["جديد"],
      gift: false,
      image:
        "https://img.freepik.com/free-photo/top-view-fundation-packaging_52683-94665.jpg?t=st=1756265021~exp=1756268621~hmac=7cad9094990e487ec234f96a5b70bd012cb580ac77a35e48c59af980ed594e9d&w=1480",
    },
  ];

  const heroSlides = [
    {
      id: "h1",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1800&auto=format&fit=crop",
      title: "عروض حصرية",
      subtitle: "خصومات مختارة على العطور الفاخرة",
      href: "#catalog",
    },
    {
      id: "h2",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1800&auto=format&fit=crop",
      title: "إطلالتك تبدأ هنا",
      subtitle: "مكياج جديد كل أسبوع",
      href: "#catalog",
    },
    {
      id: "h3",
      image:
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1800&auto=format&fit=crop",
      title: "عناية مُبسّطة",
      subtitle: "روتين بشرة نظيف وفعّال",
      href: "#catalog",
    },
  ];

  // =================== حالة الواجهة ===================
  const [q, setQ] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    priceMin: 0,
    priceMax: 6000,
    ratingMin: 0,
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [view, setView] = useState("grid");
  const [toast, setToast] = useState(null);

  // سلايدر
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setSlide((i) => (i + 1) % heroSlides.length),
      4500
    );
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const prevSlide = () =>
    setSlide((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((i) => (i + 1) % heroSlides.length);

  // ماركات متاحة
  const brands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))),
    [products]
  );

  // فلترة وفرز
  const discounted = (p) =>
    p.originalPrice && p.originalPrice > p.price
      ? Math.round((1 - p.price / p.originalPrice) * 100)
      : 0;
  const money = (n) =>
    new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 0 }).format(n) +
    " ج.م";

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    let list = products.filter((p) => {
      if (k && !(p.name + " " + p.brand).toLowerCase().includes(k))
        return false;
      if (filters.category !== "all" && p.category !== filters.category)
        return false;
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (
        typeof p.price === "number" &&
        (p.price < filters.priceMin || p.price > filters.priceMax)
      )
        return false;
      if (typeof p.rating === "number" && p.rating < filters.ratingMin)
        return false;
      return true;
    });

    switch (sortBy) {
      case "price_asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating_desc":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "discount_desc":
        list = [...list].sort((a, b) => discounted(b) - discounted(a));
        break;
      default:
        break;
    }
    return list;
  }, [products, q, filters, sortBy]);

  function updateFilter(name, value) {
    setFilters((f) => ({ ...f, [name]: value }));
  }
  function addToCart(p) {
    console.log("ADD_TO_CART", p.id);
    setToast(`تمت إضافة "${p.brand} - ${p.name}" للسلة`);
    setTimeout(() => setToast(null), 2800);
  }

  return (
    <main
      className="cos"
      dir="rtl"
      lang="ar"
      style={{ "--brand": brand, "--accent": accent }}
    >
      {/* NAV */}
      <header className="cos-nav" role="banner">
        <div className="cos-container">
          <div className="cos-logo">Cosmetics</div>
        </div>
      </header>

      {/* HERO full-width slider */}
      <section id="hero" className="cos-hero">
        <div className="cos-hero-banner">
          <div className="cos-slider" role="region" aria-label="عروض">
            {heroSlides.map((s, i) => (
              <div
                key={s.id}
                className={`cos-slide ${i === slide ? "is-active" : ""}`}
                style={{ backgroundImage: `url(${s.image})` }}
              >
                <div className="cos-slide-caption">
                  <div className="cos-badge-lg">عروض حصرية</div>
                  <h3>{s.title}</h3>
                  <p>{s.subtitle}</p>
                  <a href={s.href} className="cos-btn cos-btn-primary">
                    تسوقي الآن
                  </a>
                </div>
              </div>
            ))}
            <button
              className="cos-slider-nav cos-prev"
              onClick={prevSlide}
              aria-label="السابق"
            >
              ‹
            </button>
            <button
              className="cos-slider-nav cos-next"
              onClick={nextSlide}
              aria-label="التالي"
            >
              ›
            </button>
            <div className="cos-dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`cos-dot ${i === slide ? "is-active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`الشريحة ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* لوحة البحث السريعة */}
        <div className="cos-container cos-hero-panel">
          <div className="cos-panel-card">
            <h1 className="cos-hero-h1">دوري على منتجك</h1>
            <div className="cos-hero-actions">
              <input
                className="cos-input"
                placeholder="ابحثي… (مثال: عطر فانيلا)"
                aria-label="بحث"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              <a className="cos-btn cos-btn-primary" href="#catalog">
                استعراض المنتجات
              </a>
            </div>
            <div className="cos-chips" role="region" aria-label="فئات شائعة">
              {[
                { label: "مكياج", v: "مكياج" },
                { label: "العناية بالبشرة", v: "العناية بالبشرة" },
                { label: "عطور", v: "عطور" },
                { label: "الشعر", v: "الشعر" },
              ].map((c, idx) => (
                <button
                  key={idx}
                  className="cos-chip"
                  onClick={() => updateFilter("category", c.v)}
                >
                  {c.label}
                </button>
              ))}
              <button
                className="cos-chip"
                onClick={() => updateFilter("category", "all")}
              >
                الكل
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="cos-section">
        <div className="cos-container">
          <div className="cos-sec-head">
            <h2>المنتجات</h2>
            <div className="cos-refine">
              <div className="cos-refine-left">
                <label>الترتيب</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">الملاءمة</option>
                  <option value="price_asc">السعر ↑</option>
                  <option value="price_desc">السعر ↓</option>
                  <option value="rating_desc">التقييم ↓</option>
                  <option value="discount_desc">أعلى خصم</option>
                </select>
              </div>
              <div className="cos-refine-right">
                <button
                  className={`cos-view ${view === "grid" ? "is-active" : ""}`}
                  onClick={() => setView("grid")}
                  aria-label="شبكة"
                >
                  ▦
                </button>
                <button
                  className={`cos-view ${view === "list" ? "is-active" : ""}`}
                  onClick={() => setView("list")}
                  aria-label="قائمة"
                >
                  ≣
                </button>
              </div>
            </div>
          </div>

          {/* فلاتر */}
          <div className="cos-filters" role="region" aria-label="فلاتر">
            <div className="cos-filter">
              <label>التصنيف</label>
              <select
                value={filters.category}
                onChange={(e) => updateFilter("category", e.target.value)}
              >
                <option value="all">الكل</option>
                <option value="مكياج">مكياج</option>
                <option value="العناية بالبشرة">العناية بالبشرة</option>
                <option value="عطور">عطور</option>
                <option value="الشعر">الشعر</option>
              </select>
            </div>
            <div className="cos-filter">
              <label>الماركة</label>
              <select
                value={filters.brand}
                onChange={(e) => updateFilter("brand", e.target.value)}
              >
                <option value="all">الكل</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div className="cos-filter">
              <label>السعر من</label>
              <input
                type="number"
                min={0}
                value={filters.priceMin}
                onChange={(e) =>
                  updateFilter("priceMin", Number(e.target.value) || 0)
                }
              />
            </div>
            <div className="cos-filter">
              <label>إلى</label>
              <input
                type="number"
                min={0}
                value={filters.priceMax}
                onChange={(e) =>
                  updateFilter("priceMax", Number(e.target.value) || 0)
                }
              />
            </div>
            <div className="cos-filter">
              <label>التقييم</label>
              <select
                value={filters.ratingMin}
                onChange={(e) =>
                  updateFilter("ratingMin", Number(e.target.value) || 0)
                }
              >
                <option value={0}>أي تقييم</option>
                <option value={3}>+3 نجوم</option>
                <option value={4}>+4 نجوم</option>
                <option value={4.5}>+4.5 نجوم</option>
              </select>
            </div>
            <button
              className="cos-btn"
              onClick={() =>
                setFilters({
                  category: "all",
                  brand: "all",
                  priceMin: 0,
                  priceMax: 6000,
                  ratingMin: 0,
                })
              }
            >
              تصفير الفلاتر
            </button>
          </div>

          {/* الشبكة/القائمة */}
          <div className={`cos-grid ${view === "list" ? "is-list" : ""}`}>
            {filtered.map((p) => (
              <article
                key={p.id}
                className={`cos-card ${view === "list" ? "cos-card-list" : ""}`}
                aria-label={p.name}
              >
                <div className="cos-card-media">
                  <img
                    src={p.image}
                    alt={`${p.brand} ${p.name}`}
                    loading="lazy"
                  />
                  {discounted(p) > 0 && (
                    <div className="cos-badge cos-badge-sale">
                      -{discounted(p)}%
                    </div>
                  )}
                  {p.gift && (
                    <div className="cos-badge cos-badge-gift">هدية</div>
                  )}
                  {p.tags?.includes("حصري") && (
                    <div className="cos-badge cos-badge-ex">حصري</div>
                  )}
                </div>
                <div className="cos-card-body">
                  <h3 className="cos-card-title">
                    {p.brand} — {p.name}
                  </h3>
                  <div className="cos-price-row">
                    <div className="cos-price">{money(p.price)}</div>
                    {p.originalPrice && p.originalPrice > p.price && (
                      <div className="cos-price-old">
                        {money(p.originalPrice)}
                      </div>
                    )}
                  </div>
                  <div
                    className="cos-rating"
                    aria-label={`تقييم ${p.rating} من 5`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`star ${
                          i < Math.round(p.rating) ? "full" : ""
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="cos-rating-num">
                      {p.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="cos-card-actions">
                    <button className="cos-btn" onClick={() => addToCart(p)}>
                      أضف للسلة
                    </button>
                    <button className="cos-btn cos-btn-primary">تفاصيل</button>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="cos-empty">لا نتائج مطابقة للفلاتر الحالية.</div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cos-footer" role="contentinfo">
        <div className="cos-container">
          <p>© {new Date().getFullYear()} Cosmetics — متجر الجمال</p>
        </div>
      </footer>

      {toast && (
        <div className="cos-toast" role="status">
          {toast}
        </div>
      )}
    </main>
  );
}
