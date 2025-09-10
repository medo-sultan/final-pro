// ===== AutopartPro.jsx (سلايدر في بداية الصفحة + "عروض حصرية" + بقية المزايا) =====
// استخدام:
// import AutopartPro from "./AutopartPro";
// import "./AutopartPro.css";
// <AutopartPro brand="#2563eb" accent="#22c55e" />

import React, { useMemo, useState, useEffect } from "react";
import "./Autopart.css";

export default function AutopartPro({ brand = "#2563eb", accent = "#22c55e" }) {
  // =================== بيانات تجريبية ===================
  const newCars = [
    {
      id: 1,
      title: "تويوتا كورولا 2025",
      price: 950000,
      tag: "جديدة",
      year: 2025,
      km: 0,
      body: "سيدان",
      gearbox: "أوتوماتيك",
      power: "بنزين",
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "هيونداي إلنترا 2025",
      price: 890000,
      tag: "جديدة",
      year: 2025,
      km: 0,
      body: "سيدان",
      gearbox: "أوتوماتيك",
      power: "بنزين",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "كيا سبورتاج 2025",
      price: 1350000,
      tag: "جديدة",
      year: 2025,
      km: 0,
      body: "SUV",
      gearbox: "أوتوماتيك",
      power: "بنزين",
      image:
        "https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 17,
      title: "MG 4 Electric 2025",
      price: 1500000,
      tag: "جديدة",
      year: 2025,
      km: 0,
      body: "هاتشباك",
      gearbox: "أوتوماتيك",
      power: "كهرباء",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const usedCars = [
    {
      id: 4,
      title: "نيسان صني 2019",
      price: 430000,
      tag: "مستعملة",
      year: 2019,
      km: 98000,
      body: "سيدان",
      gearbox: "مانيوال",
      power: "بنزين",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "بيجو 301 2018",
      price: 390000,
      tag: "مستعملة",
      year: 2018,
      km: 122000,
      body: "سيدان",
      gearbox: "مانيوال",
      power: "بنزين",
      image:
        "https://img.freepik.com/free-photo/black-luxury-jeep-driving-highway_114579-4382.jpg?w=1480",
    },
    {
      id: 6,
      title: "رينو كابتشر 2020",
      price: 520000,
      tag: "مستعملة",
      year: 2020,
      km: 64000,
      body: "SUV",
      gearbox: "أوتوماتيك",
      power: "بنزين",
      image:
        "https://www.maannews.net/cached_uploads/resize/822/487/n/2024/04/08/3232-1712561432.jpg",
    },
    {
      id: 18,
      title: "تسلا موديل 3 2019",
      price: 1600000,
      tag: "مستعملة",
      year: 2019,
      km: 72000,
      body: "سيدان",
      gearbox: "أوتوماتيك",
      power: "كهرباء",
      image:
        "https://img.freepik.com/free-photo/moving-black-car-road_1268-21988.jpg?w=1480",
    },
  ];

  const tires = [
    {
      id: 7,
      title: 'كاوتش 17" ميشلان',
      price: 5200,
      image:
        "https://img.freepik.com/premium-photo/new-car-wheel-tires-pile-3d-rendering_476612-23857.jpg?w=1480",
    },
    {
      id: 8,
      title: 'كاوتش 16" بريجستون',
      price: 4300,
      image:
        "https://img.freepik.com/premium-photo/3d-rendering-pile-car-wheels-vertical-one_190619-2392.jpg?w=1480",
    },
  ];

  const lights = [
    {
      id: 9,
      title: "فوج لايت LED",
      price: 950,
      image:
        "https://img.freepik.com/free-photo/back-dark-car-with-red-rear-light_23-2147963061.jpg?w=1480",
    },
    {
      id: 10,
      title: "كشاف أمامي زينون",
      price: 1800,
      image:
        "https://img.freepik.com/premium-photo/car-headlights-white-background_538646-10051.jpg?w=1480",
    },
  ];

  const spareParts = [
    {
      id: 11,
      title: "فلتر هواء أصلي",
      price: 350,
      image:
        "https://img.freepik.com/free-photo/different-car-accessories-composition_23-2149030435.jpg?w=1480",
    },
    {
      id: 12,
      title: "ردياتير تبريد",
      price: 1450,
      image:
        "https://image.made-in-china.com/43f34j00ynVWHwgkkArG/Auto-Parts-Plastic-Aluminium-Truck-Car-Cooling-Water-Tank-Radiator-for-Dodge-Sprinter-2500-Base-V6-3-0L-13254.webp",
    },
    {
      id: 13,
      title: "طقم تيل فرامل",
      price: 620,
      image:
        "https://img.freepik.com/free-photo/different-car-accessories-arrangement_23-2149030402.jpg?w=1480",
    },
  ];

  const accessories = [
    {
      id: 14,
      title: "فرش جلد تفصيل",
      price: 980,
      image:
        "https://img.freepik.com/free-photo/black-interior-details-modern-luxury-car_181624-33049.jpg?w=1480",
    },
    {
      id: 15,
      title: "كفر مقود سبورت",
      price: 220,
      image:
        "https://img.freepik.com/free-photo/closeup-shot-black-car-s-modern-interior-wheel_181624-25427.jpg?w=1480",
    },
    {
      id: 16,
      title: "عطر سيارة فاخر",
      price: 150,
      image:
        "https://img.freepik.com/premium-photo/small-aroma-glass-jar-car-air-freshener-hanging-dashboard-vehicle-saloon_81262-2519.jpg?w=1480",
    },
  ];

  // شرائح السلايدر (أعلى الصفحة)
  const heroSlides = [
    {
      id: "s1",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
      title: "عروض حصرية",
      subtitle: "خصومات على مختارات السيارات الجديدة",
      href: "#catalog",
    },
    {
      id: "s2",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop",
      title: "عروض حصرية",
      subtitle: "سيارات SUV بأسعار تنافسية",
      href: "#catalog",
    },
    {
      id: "s3",
      image:
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop",
      title: "عروض حصرية",
      subtitle: "اختيارات كهربائية وهجينة",
      href: "#catalog",
    },
  ];

  // =================== حالة واجهة المستخدم ===================
  const [q, setQ] = useState("");
  const [pageTab, setPageTab] = useState("buy"); // buy | sell  (تبويب الهيرو)
  const [tab, setTab] = useState("all"); // all | new | used (تبويب الكتالوج)
  const [toast, setToast] = useState(null);

  const [form, setForm] = useState({
    purpose: "بيع",
    brand: "",
    model: "",
    year: "",
    condition: "مستعملة",
    price: "",
    km: "",
    gearbox: "مانيوال",
    fuel: "بنزين",
    desc: "",
    images: [],
  });
  const [previews, setPreviews] = useState([]);

  const [quickSell, setQuickSell] = useState({
    plate: "",
    vin: "",
    km: "",
    phone: "",
  });

  const [filters, setFilters] = useState({
    body: "all",
    gearbox: "all",
    power: "all",
    yearMin: 2015,
    yearMax: 2025,
    priceMin: 0,
    priceMax: 2500000,
  });

  const [sortBy, setSortBy] = useState("relevance"); // price_asc | price_desc | year_desc | year_asc | relevance
  const [view, setView] = useState("grid"); // grid | list

  // =================== أدوات ===================
  const money = (n) =>
    new Intl.NumberFormat("ar-EG", { maximumFractionDigits: 0 }).format(n) +
    " ج.م";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allCars = useMemo(() => [...newCars, ...usedCars], []);

  const carsByTab = useMemo(() => {
    if (tab === "new") return newCars;
    if (tab === "used") return usedCars;
    return allCars;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, allCars]);

  const filteredCars = useMemo(() => {
    const k = q.trim();
    let list = carsByTab.filter((c) => {
      if (k && !c.title.includes(k)) return false;
      if (filters.body !== "all" && c.body !== filters.body) return false;
      if (filters.gearbox !== "all" && c.gearbox !== filters.gearbox)
        return false;
      if (filters.power !== "all" && c.power !== filters.power) return false;
      if (
        typeof c.year === "number" &&
        (c.year < filters.yearMin || c.year > filters.yearMax)
      )
        return false;
      if (
        typeof c.price === "number" &&
        (c.price < filters.priceMin || c.price > filters.priceMax)
      )
        return false;
      return true;
    });

    switch (sortBy) {
      case "price_asc":
        list = [...list].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "price_desc":
        list = [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
      case "year_desc":
        list = [...list].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
        break;
      case "year_asc":
        list = [...list].sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
        break;
      default:
        break; // relevance
    }
    return list;
  }, [carsByTab, q, filters, sortBy]);

  // =================== سلايدر (أوتوبلاي + تحكم) ===================
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    if (!heroSlides.length) return;
    const t = setInterval(
      () => setSlide((i) => (i + 1) % heroSlides.length),
      4500
    );
    return () => clearInterval(t);
  }, [heroSlides.length]);
  function prevSlide() {
    setSlide((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }
  function nextSlide() {
    setSlide((i) => (i + 1) % heroSlides.length);
  }

  // =================== Handlers ===================
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }
  function handleImages(e) {
    const files = Array.from(e.target.files || []);
    setForm((f) => ({ ...f, images: files }));
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("CAR FORM SUBMIT", form);
    setToast("تم إرسال بيانات سيارتك. هنراجعها ونتواصل معاك.");
    setTimeout(() => setToast(null), 3500);
  }
  function updateFilter(name, value) {
    setFilters((f) => ({ ...f, [name]: value }));
  }
  function handleQuickSell(e) {
    e.preventDefault();
    console.log("QUICK SELL SUBMIT", quickSell);
    setToast("تم طلب التقييم المبدئي — هنرجع لك بتقدير السعر.");
    setTimeout(() => setToast(null), 3500);
  }

  // =================== UI ===================
  return (
    <main
      className="ap2"
      dir="rtl"
      lang="ar"
      style={{ "--brand": brand, "--brand-2": accent }}
    >
      {/* NAV */}
      <header className="ap2-nav" role="banner">
        <div className="ap2-container">
          <div className="ap2-logo">AutoPart</div>
          <nav className="ap2-links" aria-label="القائمة الرئيسية">
            <a href="#hero">الرئيسية</a>
            <a href="#catalog">الكتالوج</a>
            <a href="#form">أدخل مواصفاتك</a>
            <a href="#tires">إطارات</a>
            <a href="#lights">مصابيح</a>
            <a href="#spares">اسبيرات</a>
            <a href="#access">زينة</a>
          </nav>
        </div>
      </header>

      {/* HERO (قسم السلايدر + محتوى شراء/بيع) */}
      <section id="hero" className="ap2-hero">
        {/* سلايدر فول-وِدث بنمط Faces */}
        <div className="ap2-hero-banner">
          <div className="ap2-slider" role="region" aria-label="سلايدر العروض">
            {heroSlides.map((s, i) => (
              <div
                key={s.id}
                className={`ap2-slide ${i === slide ? "is-active" : ""}`}
                style={{ backgroundImage: `url(${s.image})` }}
              >
                <div className="ap2-slide-caption">
                  <div className="ap2-badge-lg">عروض حصرية</div>
                  <h3>{s.title}</h3>
                  <p>{s.subtitle}</p>
                  <a href={s.href} className="ap2-btn ap2-btn-primary">
                    تصفّح العروض
                  </a>
                </div>
              </div>
            ))}
            <button
              className="ap2-slider-nav ap2-prev"
              onClick={prevSlide}
              aria-label="السابق"
            >
              ‹
            </button>
            <button
              className="ap2-slider-nav ap2-next"
              onClick={nextSlide}
              aria-label="التالي"
            >
              ›
            </button>
            <div className="ap2-dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`ap2-dot ${i === slide ? "is-active" : ""}`}
                  onClick={() => setSlide(i)}
                  aria-label={`اذهب إلى الشريحة ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* لوحة شراء/بيع أسفل السلايدر */}
        <div className="ap2-container ap2-hero-panel">
          <div className="ap2-panel-card">
            <div className="ap2-hero-tabs" role="tablist">
              <button
                className={`ap2-hero-tab ${
                  pageTab === "buy" ? "is-active" : ""
                }`}
                onClick={() => setPageTab("buy")}
                role="tab"
                aria-selected={pageTab === "buy"}
              >
                شراء
              </button>
              <button
                className={`ap2-hero-tab ${
                  pageTab === "sell" ? "is-active" : ""
                }`}
                onClick={() => setPageTab("sell")}
                role="tab"
                aria-selected={pageTab === "sell"}
              >
                بيع
              </button>
            </div>

            {pageTab === "buy" ? (
              <div>
                <h1 className="ap2-hero-h1">ابحث عن عربيتك المناسبة</h1>
                <div className="ap2-hero-actions">
                  <input
                    className="ap2-input"
                    placeholder="ابحث… (مثال: كورولا)"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    aria-label="بحث"
                  />
                  <a className="ap2-btn ap2-btn-primary" href="#catalog">
                    ابدأ الاستكشاف
                  </a>
                </div>
                <div
                  className="ap2-chips"
                  role="region"
                  aria-label="فئات شائعة"
                >
                  {[
                    { label: "SUV", k: { body: "SUV" } },
                    { label: "سيدان", k: { body: "سيدان" } },
                    { label: "هاتشباك", k: { body: "هاتشباك" } },
                    { label: "كهربائية", k: { power: "كهرباء" } },
                  ].map((chip, i) => (
                    <button
                      key={i}
                      className="ap2-chip"
                      onClick={() => {
                        if (chip.k.body) updateFilter("body", chip.k.body);
                        if (chip.k.power) updateFilter("power", chip.k.power);
                      }}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h1 className="ap2-hero-h1">بيع عربيتك بسهولة</h1>
                <form className="ap2-quicksell" onSubmit={handleQuickSell}>
                  <input
                    className="ap2-input"
                    placeholder="رقم اللوحة"
                    value={quickSell.plate}
                    onChange={(e) =>
                      setQuickSell((s) => ({ ...s, plate: e.target.value }))
                    }
                  />
                  <input
                    className="ap2-input"
                    placeholder="VIN"
                    value={quickSell.vin}
                    onChange={(e) =>
                      setQuickSell((s) => ({ ...s, vin: e.target.value }))
                    }
                  />
                  <input
                    className="ap2-input"
                    type="number"
                    placeholder="عدد الكيلومترات"
                    value={quickSell.km}
                    onChange={(e) =>
                      setQuickSell((s) => ({ ...s, km: e.target.value }))
                    }
                  />
                  <input
                    className="ap2-input"
                    placeholder="موبايل للتواصل"
                    value={quickSell.phone}
                    onChange={(e) =>
                      setQuickSell((s) => ({ ...s, phone: e.target.value }))
                    }
                  />
                  <button className="ap2-btn ap2-btn-primary" type="submit">
                    تقييم مبدئي
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CATALOG + FILTERS */}
      <section id="catalog" className="ap2-section">
        <div className="ap2-container">
          <div className="ap2-sec-head">
            <h2>الكتالوج</h2>
            <div className="ap2-tabs" role="tablist">
              <button
                className={`ap2-tab ${tab === "all" ? "is-active" : ""}`}
                onClick={() => setTab("all")}
                role="tab"
                aria-selected={tab === "all"}
              >
                الكل
              </button>
              <button
                className={`ap2-tab ${tab === "new" ? "is-active" : ""}`}
                onClick={() => setTab("new")}
                role="tab"
                aria-selected={tab === "new"}
              >
                جديدة
              </button>
              <button
                className={`ap2-tab ${tab === "used" ? "is-active" : ""}`}
                onClick={() => setTab("used")}
                role="tab"
                aria-selected={tab === "used"}
              >
                مستعملة
              </button>
            </div>
          </div>

          {/* لوحة الفلاتر */}
          <div className="ap2-filters" role="region" aria-label="فلاتر البحث">
            <div className="ap2-filter">
              <label>النوع</label>
              <select
                value={filters.body}
                onChange={(e) => updateFilter("body", e.target.value)}
              >
                <option value="all">الكل</option>
                <option value="سيدان">سيدان</option>
                <option value="SUV">SUV</option>
                <option value="هاتشباك">هاتشباك</option>
              </select>
            </div>
            <div className="ap2-filter">
              <label>الفتيس</label>
              <select
                value={filters.gearbox}
                onChange={(e) => updateFilter("gearbox", e.target.value)}
              >
                <option value="all">الكل</option>
                <option value="مانيوال">مانيوال</option>
                <option value="أوتوماتيك">أوتوماتيك</option>
              </select>
            </div>
            <div className="ap2-filter">
              <label>المحرك</label>
              <select
                value={filters.power}
                onChange={(e) => updateFilter("power", e.target.value)}
              >
                <option value="all">الكل</option>
                <option value="بنزين">بنزين</option>
                <option value="ديزل">ديزل</option>
                <option value="هجين">هجين</option>
                <option value="كهرباء">كهرباء</option>
              </select>
            </div>
            <div className="ap2-filter">
              <label>السنة: من</label>
              <input
                type="number"
                value={filters.yearMin}
                min={1980}
                max={2026}
                onChange={(e) =>
                  updateFilter("yearMin", Number(e.target.value) || 0)
                }
              />
            </div>
            <div className="ap2-filter">
              <label>إلى</label>
              <input
                type="number"
                value={filters.yearMax}
                min={1980}
                max={2026}
                onChange={(e) =>
                  updateFilter("yearMax", Number(e.target.value) || 0)
                }
              />
            </div>
            <div className="ap2-filter">
              <label>السعر: من</label>
              <input
                type="number"
                value={filters.priceMin}
                min={0}
                step={1000}
                onChange={(e) =>
                  updateFilter("priceMin", Number(e.target.value) || 0)
                }
              />
            </div>
            <div className="ap2-filter">
              <label>إلى</label>
              <input
                type="number"
                value={filters.priceMax}
                min={0}
                step={1000}
                onChange={(e) =>
                  updateFilter("priceMax", Number(e.target.value) || 0)
                }
              />
            </div>
            <button
              className="ap2-btn"
              onClick={() =>
                setFilters({
                  body: "all",
                  gearbox: "all",
                  power: "all",
                  yearMin: 2015,
                  yearMax: 2025,
                  priceMin: 0,
                  priceMax: 2500000,
                })
              }
            >
              تصفير الفلاتر
            </button>
          </div>

          {/* Refine Bar: Sort + View */}
          <div className="ap2-refine">
            <div className="ap2-refine-left">
              <label>ترتيب</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">الملاءمة</option>
                <option value="price_asc">السعر ↑</option>
                <option value="price_desc">السعر ↓</option>
                <option value="year_desc">السنة ↓</option>
                <option value="year_asc">السنة ↑</option>
              </select>
            </div>
            <div className="ap2-refine-right">
              <button
                className={`ap2-view ${view === "grid" ? "is-active" : ""}`}
                onClick={() => setView("grid")}
                aria-label="عرض شبكة"
              >
                ▦
              </button>
              <button
                className={`ap2-view ${view === "list" ? "is-active" : ""}`}
                onClick={() => setView("list")}
                aria-label="عرض قائمة"
              >
                ≣
              </button>
            </div>
          </div>

          {/* Grid/List */}
          <div className={`ap2-grid ${view === "list" ? "is-list" : ""}`}>
            {filteredCars.map((c) => (
              <article
                key={c.id}
                className={`ap2-card ${view === "list" ? "ap2-card-list" : ""}`}
                aria-label={c.title}
              >
                <div className="ap2-card-media">
                  <img src={c.image} alt={c.title} loading="lazy" />
                  <div
                    className={`ap2-badge ${
                      c.tag === "جديدة" ? "ap2-badge-new" : ""
                    }`}
                  >
                    {c.tag || "مستعملة"}
                  </div>
                </div>
                <div className="ap2-card-body">
                  <h3 className="ap2-card-title">{c.title}</h3>
                  <p className="ap2-card-sub">
                    {c.body} • {c.gearbox} • {c.power} • {c.year}
                    {c.km ? ` • ${c.km.toLocaleString("ar-EG")} كم` : ""}
                  </p>
                  <p className="ap2-price">{money(c.price)}</p>
                  <div className="ap2-card-actions">
                    <button className="ap2-btn">تفاصيل</button>
                    <button className="ap2-btn ap2-btn-primary">
                      حجز معاينة
                    </button>
                  </div>
                </div>
              </article>
            ))}
            {filteredCars.length === 0 && (
              <div className="ap2-empty">
                لا توجد نتائج مطابقه للفلاتر الحالية.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CALLS */}
      <section className="ap2-section ap2-callouts">
        <div className="ap2-container ap2-callouts-grid">
          <div className="ap2-callout">
            <h4>تشتري عربية</h4>
            <p>تمويل مرن + فحص شامل + ضمان تبديل 7 أيام.</p>
          </div>
          <div className="ap2-callout">
            <h4>تبيع عربيتك</h4>
            <p>اعلان مجاني + تصوير احترافي + فلترة للمشترين الجادين.</p>
          </div>
          <div className="ap2-callout">
            <h4>استبدال سريع</h4>
            <p>تقييم عادل حسب السوق والكيلوهات والحالة.</p>
          </div>
        </div>
      </section>

      {/* FORM (التفصيلي) */}
      <section id="form" className="ap2-section ap2-form-wrap">
        <div className="ap2-container">
          <h2>أدخل مواصفات سيارتك وصورها</h2>
          <form className="ap2-form" onSubmit={handleSubmit}>
            <div className="ap2-form-row">
              <label>الغرض</label>
              <select
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
              >
                <option>بيع</option>
                <option>استبدال</option>
              </select>
            </div>
            <div className="ap2-form-grid">
              <div className="ap2-form-row">
                <label>العلامة</label>
                <input
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="مثال: تويوتا"
                  required
                />
              </div>
              <div className="ap2-form-row">
                <label>الموديل</label>
                <input
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  placeholder="مثال: كورولا"
                  required
                />
              </div>
              <div className="ap2-form-row">
                <label>السنة</label>
                <input
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  type="number"
                  min="1980"
                  max="2026"
                  required
                />
              </div>
              <div className="ap2-form-row">
                <label>الحالة</label>
                <select
                  name="condition"
                  value={form.condition}
                  onChange={handleChange}
                >
                  <option>جديدة</option>
                  <option>مستعملة</option>
                </select>
              </div>
              <div className="ap2-form-row">
                <label>السعر المطلوب</label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  required
                />
              </div>
              <div className="ap2-form-row">
                <label>عدد الكيلومترات</label>
                <input
                  name="km"
                  value={form.km}
                  onChange={handleChange}
                  type="number"
                  min="0"
                />
              </div>
              <div className="ap2-form-row">
                <label>ناقل الحركة</label>
                <select
                  name="gearbox"
                  value={form.gearbox}
                  onChange={handleChange}
                >
                  <option>مانيوال</option>
                  <option>أوتوماتيك</option>
                </select>
              </div>
              <div className="ap2-form-row">
                <label>نوع الوقود</label>
                <select name="fuel" value={form.fuel} onChange={handleChange}>
                  <option>بنزين</option>
                  <option>ديزل</option>
                  <option>هجين</option>
                  <option>كهرباء</option>
                </select>
              </div>
            </div>
            <div className="ap2-form-row">
              <label>الوصف</label>
              <textarea
                name="desc"
                value={form.desc}
                onChange={handleChange}
                rows={4}
                placeholder="حالة الموتور، الصيانات، رشة/فابريكة…"
              ></textarea>
            </div>
            <div className="ap2-form-row">
              <label>صور السيارة</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImages}
              />
              {previews.length > 0 && (
                <div className="ap2-previews">
                  {previews.map((src, i) => (
                    <img key={i} src={src} alt={`car-${i}`} />
                  ))}
                </div>
              )}
              <p className="ap2-help">
                اسحب وأفلت الصور أو اختر من جهازك (حد أقصى 10 صور).
              </p>
            </div>
            <div className="ap2-form-actions">
              <button className="ap2-btn ap2-btn-primary" type="submit">
                إرسال
              </button>
              <span className="ap2-form-note">
                لن ننشر بياناتك قبل مراجعتها.
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* TIRES */}
      <section id="tires" className="ap2-section">
        <div className="ap2-container">
          <div className="ap2-sec-head">
            <h2>إطارات</h2>
            <a className="ap2-link" href="#form">
              ركّب واشتري
            </a>
          </div>
          <div className="ap2-grid-sm">
            {tires.map((t) => (
              <article key={t.id} className="ap2-card-sm">
                <img src={t.image} alt={t.title} />
                <div>
                  <h3>{t.title}</h3>
                  <p className="ap2-price">{money(t.price)}</p>
                  <button className="ap2-btn">أضف للسلة</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTS */}
      <section id="lights" className="ap2-section ap2-section-alt">
        <div className="ap2-container">
          <h2>مصابيح وكشافات</h2>
          <div className="ap2-grid">
            {lights.map((l) => (
              <article key={l.id} className="ap2-card">
                <div className="ap2-card-media">
                  <img src={l.image} alt={l.title} />
                  <div className="ap2-badge">LED</div>
                </div>
                <div className="ap2-card-body">
                  <h3 className="ap2-card-title">{l.title}</h3>
                  <p className="ap2-price">{money(l.price)}</p>
                  <div className="ap2-card-actions">
                    <button className="ap2-btn">تفاصيل</button>
                    <button className="ap2-btn ap2-btn-primary">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPARES */}
      <section id="spares" className="ap2-section">
        <div className="ap2-container">
          <h2>اسبيرات وقطع غيار</h2>
          <div className="ap2-grid">
            {spareParts.map((s) => (
              <article key={s.id} className="ap2-card">
                <div className="ap2-card-media">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="ap2-card-body">
                  <h3 className="ap2-card-title">{s.title}</h3>
                  <p className="ap2-price">{money(s.price)}</p>
                  <div className="ap2-card-actions">
                    <button className="ap2-btn">تفاصيل</button>
                    <button className="ap2-btn ap2-btn-primary">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section id="access" className="ap2-section ap2-section-alt">
        <div className="ap2-container">
          <h2>زينة واكسسوارات</h2>
          <div className="ap2-grid">
            {accessories.map((a) => (
              <article key={a.id} className="ap2-card">
                <div className="ap2-card-media">
                  <img src={a.image} alt={a.title} />
                </div>
                <div className="ap2-card-body">
                  <h3 className="ap2-card-title">{a.title}</h3>
                  <p className="ap2-price">{money(a.price)}</p>
                  <div className="ap2-card-actions">
                    <button className="ap2-btn">تفاصيل</button>
                    <button className="ap2-btn ap2-btn-primary">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK SELL FORM AT THE END */}
      <section id="sell-end" className="ap2-section ap2-sell-end">
        <div className="ap2-container">
          <h2>بيع سريع — تقدير سعر عربيتك</h2>
          <form
            className="ap2-quicksell ap2-quicksell-end"
            onSubmit={handleQuickSell}
          >
            <input
              className="ap2-input"
              placeholder="رقم اللوحة"
              value={quickSell.plate}
              onChange={(e) =>
                setQuickSell((s) => ({ ...s, plate: e.target.value }))
              }
            />
            <input
              className="ap2-input"
              placeholder="VIN"
              value={quickSell.vin}
              onChange={(e) =>
                setQuickSell((s) => ({ ...s, vin: e.target.value }))
              }
            />
            <input
              className="ap2-input"
              type="number"
              placeholder="عدد الكيلومترات"
              value={quickSell.km}
              onChange={(e) =>
                setQuickSell((s) => ({ ...s, km: e.target.value }))
              }
            />
            <input
              className="ap2-input"
              placeholder="موبايل للتواصل"
              value={quickSell.phone}
              onChange={(e) =>
                setQuickSell((s) => ({ ...s, phone: e.target.value }))
              }
            />
            <button className="ap2-btn ap2-btn-primary" type="submit">
              احصل على تقدير
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ap2-footer" role="contentinfo">
        <div className="ap2-container">
          <p>
            © {new Date().getFullYear()} AutoPart — منصة السيارات وقطع الغيار
          </p>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="ap2-toast" role="status">
          {toast}
        </div>
      )}
    </main>
  );
}
