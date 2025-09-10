import React from "react";
import "./GameBoy.css";

const SECTIONS = [
  {
    key: "games",
    title: "ألعاب GameBoy الكلاسيكية",
    copy: "استمتع بأشهر وأمتع ألعاب GameBoy: مغامرات، تحديات، ذكريات لا تُنسى. اكتشف مكتبة الألعاب الكلاسيكية التي أبهرت جيل القيمرز.",
    cta: "تصفح الألعاب",
    href: "#games",
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
    alt: "Classic GameBoy cartridges and handheld",
  },
  {
    key: "kidswear",
    title: "ملابس أطفال بتصاميم قيمرز",
    copy: "تشكيلة ملابس أطفال عصرية مستوحاة من عالم الألعاب والشخصيات المحبوبة. راحة وأناقة ولمسة من المرح لكل طفل!",
    cta: "تسوق ملابس الأطفال",
    href: "#kidswear",
    img: "https://img.freepik.com/premium-photo/innocent-look_1048944-27924273.jpg?w=1480",
    alt: "Kidswear inspired by gaming culture",
  },
  {
    key: "newgames",
    title: "أحدث إصدارات الألعاب",
    copy: "كن أول من يجرب أحدث ألعاب GameBoy، مع تحديثات مستمرة لأفضل العناوين والإصدارات الجديدة فور صدورها!",
    cta: "شاهد الإصدارات",
    href: "#newgames",
    img: "https://img.freepik.com/free-photo/top-view-virtual-reality-headset-with-joystick_23-2148912730.jpg?t=st=1756245425~exp=1756249025~hmac=699074698e9e2d576b882c11f4d69dd6f1414d48d6d7ef643d986508eb74b5a1&w=1480",
    alt: "New game releases showcase",
  },
  {
    key: "news",
    title: "آخر أخبار القيمرز",
    copy: "تابع أحدث الأخبار، الفعاليات، البطولات والتحديثات في عالم قيمرز GameBoy. كل جديد في مكان واحد!",
    cta: "اقرأ الأخبار",
    href: "#news",
    img: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop",
    alt: "Gaming news and tournaments",
  },
  {
    key: "offers",
    title: "عروض الألعاب والتخفيضات",
    copy: "لا تفوت أقوى عروض وتخفيضات ألعاب GameBoy. صفقات حصرية على باقات الألعاب والإكسسوارات!",
    cta: "اكتشف العروض",
    href: "#offers",
    img: "https://img.freepik.com/free-photo/side-view-kid-relaxing-with-tablet_23-2150639951.jpg?t=st=1756245681~exp=1756249281~hmac=96c19add4b5e2e57ff0b772ba4ab298fb18f1398f62225a78c8f603980a0e00e&w=1480",
    alt: "Exclusive game deals and discounts",
  },
];

export default function GameBoy() {
  return (
    <main className="gb-page" dir="rtl">
      {/* HERO */}
      <section className="gameboy-hero" aria-label="GameBoy World Hero">
        <div className="gb-container">
          <h1 className="gameboy-title">
            <span className="glitch" data-text="GameBOY">
              GameBOY
            </span>{" "}
            World
          </h1>
          <p className="gameboy-subtitle">
            ألعاب • ملابس أطفال • أحدث الإصدارات • أخبار القيمرز • عروض الألعاب
          </p>
          <a
            href="#games"
            className="gb-btn gb-btn--primary"
            aria-label="ابدأ التصفح"
          >
            ابدأ التصفح
          </a>
        </div>
        <div className="scanlines" aria-hidden="true" />
      </section>

      {/* SECTIONS */}
      {SECTIONS.map((s, idx) => (
        <section
          key={s.key}
          id={s.key}
          className={`gameboy-section ${idx % 2 === 1 ? "reverse" : ""}`}
          aria-labelledby={`${s.key}-title`}
        >
          <div className="gb-container">
            <div className="section-grid">
              <div className="section-text">
                <h2 id={`${s.key}-title`}>{s.title}</h2>
                <p>{s.copy}</p>
                <a href={s.href} className="gb-btn" aria-label={s.title}>
                  {s.cta}
                </a>
              </div>

              <figure className="section-media">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <span className="shine" aria-hidden="true" />
              </figure>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
