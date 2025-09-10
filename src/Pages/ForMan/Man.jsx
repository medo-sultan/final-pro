import React, { useEffect } from "react";
import "./Man.css";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";

function ColorDots({ colors = [] }) {
  return (
    <div className="color-dots" aria-label="ألوان متاحة">
      {colors.map((c, i) => (
        <span
          key={i}
          className="dot"
          style={{ backgroundColor: c }}
          title={c}
        />
      ))}
    </div>
  );
}

function ItemCard({ item }) {
  return (
    <article className="ms-item" role="article" aria-label={item.title}>
      <button className="ms-like" aria-label="أضف للمفضلة" title="مفضلة">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 21s-7.2-4.35-9.33-8.13C1.2 9.7 3.3 6 7 6c2.16 0 3.39 1.17 5 3 1.61-1.83 2.84-3 5-3 3.71 0 5.8 3.7 4.33 6.87C19.2 16.65 12 21 12 21z"
            fill="currentColor"
          />
        </svg>
      </button>

      {item.tag && <span className="ms-badge">{item.tag}</span>}

      <figure className="ms-media">
        <img src={item.image} alt={item.title} loading="lazy" />
      </figure>

      <div className="ms-body">
        <h3 className="ms-title">{item.title}</h3>
        {item.brand && <p className="ms-brand">{item.brand}</p>}
        <p className="ms-meta">{item.meta}</p>

        <ColorDots colors={item.colors} />

        <div className="ms-pricing">
          <span className="ms-price">
            {item.price} <span className="ms-currency">ج.م</span>
          </span>
          {item.oldPrice && <span className="ms-old">{item.oldPrice} ج.م</span>}
        </div>

        <div className="ms-actions">
          <AddToCartButton
            item={item}
            className="ms-btn"
            label="أضِف إلى السلة"
          />
          <button className="ms-btn ghost">تفاصيل</button>
        </div>
      </div>
    </article>
  );
}

function SectionGrid({ id, title, subtitle, items }) {
  return (
    <section id={id} className="ms-section" aria-labelledby={`${id}-title`}>
      <header className="ms-head">
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          {subtitle && <p className="ms-sub">{subtitle}</p>}
        </div>
        <a href="#!" className="ms-view" aria-label={`عرض المزيد من ${title}`}>
          عرض الكل
        </a>
      </header>

      <div className="ms-grid">
        {items.map((it) => (
          <ItemCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}

export default function MensStore() {
  // خلفية خاصة للصفحة (اختياري)
  useEffect(() => {
    document.body.classList.add("menswear-light-bg");
    return () => document.body.classList.remove("menswear-light-bg");
  }, []);

  const sections = [
    // 1) ملابس رياضية
    {
      id: "sports",
      title: "ملابس رياضية",
      subtitle: "تيشيرتات أداء وسويتشيرتات وجواكيت خفيفة",
      items: [
        {
          id: "sp1",
          title: "سويتشيرت Dri-FIT Training",
          brand: "Nike",
          meta: "جاف سريع • تهوية",
          price: 1699,
          oldPrice: 2099,
          tag: "جديد",
          colors: ["#111827", "#0ea5e9", "#f59e0b"],
          image:
            "https://img.freepik.com/premium-photo/highquality-sweatshirt-mockup-with-stylish-backgrounds_1300748-21045.jpg?w=1480",
        },
        {
          id: "sp2",
          title: "AEROREADY Tee",
          brand: "adidas",
          meta: "قماش تنفّس • خفيف",
          price: 799,
          oldPrice: 899,
          colors: ["#f87171", "#94a3b8", "#1f2937"],
          image:
            "https://img.freepik.com/free-vector/soccer-jersey-design-sublimation-sport-t-shirt-design_29096-3436.jpg?t=st=1756062968~exp=1756066568~hmac=e77be7751d31733d5c5f4f425ee4b6ebf3f1e86cf0c7e5f258b250854b4cc087&w=1480",
        },
        {
          id: "sp3",
          title: "Training Shorts",
          brand: "Puma",
          meta: "جيب مخفي • مرن",
          price: 649,
          colors: ["#111827", "#6b7280"],
          image:
            "https://img.freepik.com/premium-psd/short-pants-mockup_1279154-764.jpg?w=1480",
        },
        {
          id: "sp4",
          title: "UA Windbreaker",
          brand: "Under Armour",
          meta: "مقاوم للرياح",
          price: 1999,
          oldPrice: 2299,
          colors: ["#1f2937", "#64748b"],
          image:
            "https://img.freepik.com/premium-photo/blank-black-windbreaker-mock-up-dark-background_87790-3440.jpg?w=1480",
        },
      ],
    },

    // 2) قمصان فلانيل
    {
      id: "flannel",
      title: "قمصان فلانيل",
      subtitle: "كاروهات دافئة وقصّات متنوعة",
      items: [
        {
          id: "fl1",
          title: "Flannel Red Check",
          brand: "ZARA",
          meta: "قصة عادية • قطن ممزوج",
          price: 1199,
          oldPrice: 1399,
          tag: "خصم",
          colors: ["#991b1b", "#1f2937"],
          image:
            "https://img.freepik.com/free-photo/men-rsquo-s-black-short-sleeve-shirt-casual-apparel_53876-106019.jpg?t=st=1756063399~exp=1756066999~hmac=cf68a9d63089ea4373d066e01f36eff143cb532bf31405798d8944d5c5fcd086&w=1480",
        },
        {
          id: "fl2",
          title: "Flannel Blue Check",
          brand: "H&M",
          meta: "ياقة كلاسيك",
          price: 1099,
          colors: ["#1e40af", "#0f172a"],
          image:
            "https://img.freepik.com/free-photo/clean-blank-shirt-hanger_23-2149347514.jpg?t=st=1756063448~exp=1756067048~hmac=f65cb36dab5f87f06a7e1e632944a2441e0fcaba01c57bb7f4c0d49e85c6609b&w=1480",
        },
        {
          id: "fl3",
          title: "Flannel Grey",
          brand: "Pull&Bear",
          meta: "Slim Fit",
          price: 1199,
          colors: ["#111827", "#6b7280"],
          image:
            "https://img.freepik.com/premium-psd/classic-white-long-sleeve-shirt_373676-4772.jpg?w=1480",
        },
        {
          id: "fl4",
          title: "Flannel Olive",
          brand: "Bershka",
          meta: "قصة مريحة",
          price: 1099,
          colors: ["#065f46", "#1f2937"],
          image:
            "https://img.freepik.com/premium-photo/blue-shirt-hangs-hanger-with-word-it_811902-261.jpg?w=1480",
        },
      ],
    },

    // 3) بناطيل
    {
      id: "pants",
      title: "بناطيل",
      subtitle: "جينز، تشينو، كارجو، رسمي",
      items: [
        {
          id: "pa1",
          title: "511 Slim Jeans",
          brand: "Levi's",
          meta: "غسيل أزرق متوسط",
          price: 1999,
          oldPrice: 2299,
          colors: ["#1e3a8a", "#0f172a"],
          image:
            "https://img.freepik.com/premium-photo/denim-texture-close-up-view-with-copy-space-isolate-white-background-with-clipping-path_54178-3753.jpg?w=1480",
        },
        {
          id: "pa2",
          title: "Classic Chino",
          brand: "Dockers",
          meta: "قطن مريح",
          price: 1499,
          colors: ["#a16207", "#1f2937"],
          image:
            "https://img.freepik.com/free-photo/jeans_1203-8094.jpg?t=st=1756063824~exp=1756067424~hmac=dc10e1aa151584f724916f394c4df09eb7abb6b819290c7f75abf1c59398c26d&w=1480",
        },
        {
          id: "pa3",
          title: "Cargo Utility",
          brand: "ZARA MAN",
          meta: "جيوب متعددة",
          price: 1699,
          colors: ["#374151", "#065f46"],
          image:
            "https://img.freepik.com/free-psd/fashionable-pants-isolated_23-2151336742.jpg?t=st=1756063930~exp=1756067530~hmac=3d00cfd65f659f51804f96096bea02b8a2d77960165567d4fe4cdba4d55eeac9&w=1480",
        },
        {
          id: "pa4",
          title: "Wool-Blend Trousers",
          brand: "Massimo Dutti",
          meta: "مناسب للعمل",
          price: 2699,
          colors: ["#111827", "#6b7280"],
          image:
            "https://img.freepik.com/free-photo/hand-holding-light-brown-beige-pants_23-2150756276.jpg?t=st=1756064017~exp=1756067617~hmac=656dd2bcbad8c88f04478c0d6e26f9f168b6da7ec8a7d81bb651f0de1cbe3bf3&w=1480",
        },
      ],
    },

    // 4) أحذية
    {
      id: "shoes",
      title: "أحذية",
      subtitle: "سنيكرز، جري، رسمي",
      items: [
        {
          id: "sh1",
          title: "Court Vision Sneaker",
          brand: "Nike",
          meta: "جلد صناعي • كاجوال",
          price: 2499,
          oldPrice: 2799,
          colors: ["#111827", "#f8fafc"],
          image:
            "https://img.freepik.com/premium-photo/pair-white-leather-trainers-isolated-white-background_144962-17497.jpg?w=1480",
        },
        {
          id: "sh2",
          title: "RunFast",
          brand: "adidas",
          meta: "وسادة مريحة للجري",
          price: 2799,
          colors: ["#ef4444", "#111827"],
          image:
            "https://img.freepik.com/premium-photo/women-shoes-wooden-background_93675-62963.jpg?w=1480",
        },
        {
          id: "sh3",
          title: "Leather Loafer",
          brand: "Clarks",
          meta: "مظهر فاخر",
          price: 3299,
          colors: ["#1f2937", "#7c2d12"],
          image:
            "https://img.freepik.com/free-photo/brown-man-s-leather-derby-shoes_53876-97144.jpg?t=st=1756065310~exp=1756068910~hmac=c5464993fe3772176bb0d0483ba2e76a7695c2b6dbfc719df24610b8dbeef899&w=1480",
        },
        {
          id: "sh4",
          title: "LiteRide Slide",
          brand: "Crocs",
          meta: "مقاوم للماء",
          price: 899,
          colors: ["#0f172a", "#94a3b8"],
          image:
            "https://img.freepik.com/premium-photo/male-boots-brown-leather-white-background-isolated-product_461160-4126.jpg?w=1480",
        },
      ],
    },

    // 5) قبعات
    {
      id: "caps",
      title: "ربطه عنق .قبعات .نظارات",
      subtitle: "Snapback • بيسبول • Bucket",
      items: [
        {
          id: "cp1",
          title: "9FORTY Adjustable",
          brand: "New Era",
          meta: "قياس قابل للتعديل",
          price: 599,
          colors: ["#111827", "#6b7280"],
          image:
            "https://img.freepik.com/free-psd/cap-mockup_1332-60619.jpg?t=st=1756065770~exp=1756069370~hmac=08b2ad338c5da695b1a84b4f6efe316e706e6ef3209e1e32403c2aa1c8863be4&w=1480",
        },
        {
          id: "cp2",
          title: "Heritage86",
          brand: "Nike",
          meta: "خامة قطنية",
          price: 549,
          colors: ["#1e40af", "#f8fafc"],
          image:
            "https://img.freepik.com/premium-photo/flat-front-view-ultra-realistic-grey-beanie-white-background-product-photography-studio_1045176-16615.jpg?w=1480",
        },
        {
          id: "cp3",
          title: "Bora Bora Bucket",
          brand: "Columbia",
          meta: "ستايل  • ",
          price: 699,
          colors: ["#0f172a", "#22c55e"],
          image:
            "https://img.freepik.com/free-vector/realistic-set-with-tips-tying-black-necktie-bow-tie-isolated-vector-illustration_1284-77793.jpg?t=st=1756065905~exp=1756069505~hmac=c28f6e8ccbe95f44f4c6c5d6a553dde6835a2fbb75d9af7c574c632c18c35887&w=1480",
        },
        {
          id: "cp4",
          title: "AEROREADY Cap",
          brand: "adidas",
          meta: " نظارات شمسيه وطبيه",
          price: 549,
          colors: ["#1f2937", "#f87171"],
          image:
            "https://img.freepik.com/free-photo/top-view-sunglasses-floating-water_23-2151013959.jpg?t=st=1756066185~exp=1756069785~hmac=b0f23ee5c9e723d66274f490960e8b107436ac5f03b425b2beec66f0c47cca71&w=1480",
        },
      ],
    },
  ];

  return (
    <main className="ms-page" dir="rtl">
      <div className="ms-hero">
        <div className="ms-hero-text">
          <h1>متجر الملابس الرجالية</h1>
          <p>اختيارات من Nike وadidas وZARA وغيرهم</p>
        </div>
        <nav className="ms-nav" aria-label="تصفح الأقسام">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="ms-link">
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
        />
      ))}
    </main>
  );
}
