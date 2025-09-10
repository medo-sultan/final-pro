import "./Fashoon.css";

const PRODUCTS = [
  {
    id: 1,
    title: "جينز بقصة حافة واسعة وخصر منخفض",
    price: "1,499.00",
    currency: "ج.م",
    colors: ["#263238", "#4b5563", "#2a2f33"],
    img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:f979ca9c-e0ea-4054-af1c-76d2b79ba1e3/as/EID-dca150570aba093230eaae09dab1ea89a70d9d05.jpg?width=450&height=675&preferwebp=true",
    hoverImg:
      "https://media.alshaya.com/adobe/assets/urn:aaid:aem:263101dc-495e-40f4-9119-6a3e967b5fb2/as/EID-f2e2ba885631975ee085b6cab5dcdeefe43753a0.jpg?width=450&height=675&preferwebp=true",
    count: "3+",
  },
  {
    id: 2,
    title: "بنطلون مزود برباط",
    price: "1,499.00",
    currency: "ج.م",
    colors: ["#a1a1aa", "#6b7280", "#111827"],
    img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:489a436a-499e-4013-b516-d8258d3ffad0/as/EID-5c5f00461bc4dd91227e1210aa3c4fb8654e8786.jpg?width=450&height=675&preferwebp=true",
    hoverImg:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
    count: "2+",
  },
  {
    id: 3,
    title: "سكورت ميني",
    price: "1,199.00",
    currency: "ج.م",
    colors: ["#b1b5bd", "#9aa3af", "#6b7280"],
    img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:45f98b3f-1924-494f-8602-0f850c5abec2/as/EID-bd0b60281ee1baf97241b98728e073b8ec8d6471.jpg?width=450&height=675&preferwebp=true",
    hoverImg:
      "https://media.alshaya.com/adobe/assets/urn:aaid:aem:cec3e9f4-2ad0-4914-b866-c7ea25f14424/as/EID-ff952528f6e853a29b2792c617dd960753917e9f.jpg?width=450&height=675&preferwebp=true",
    count: "1+",
  },
  {
    id: 4,
    title: "بليزر بصفي أزرار مزدوج",
    price: "2,999.00",
    currency: "ج.م",
    colors: ["#0f172a", "#1f2937", "#111827"],
    img: "https://img.freepik.com/free-photo/medium-shot-beautiful-woman-portrait_23-2149226621.jpg?t=st=1757084734~exp=1757088334~hmac=ee912d323672e6799a38b5a944ea95d4f2c6a54ef82f8d7bda46c94fe7df00ae&w=1480",
    hoverImg:
      "https://img.freepik.com/free-photo/medium-shot-woman-sitting-portrait_23-2149226615.jpg?t=st=1757084785~exp=1757088385~hmac=d5d4bab656ff1f11577217702fd0da7f2959f87379963852489967dca3e5c24f&w=1480",
    count: "2+",
  },
];

export default function Fashoon() {
  return (
    <section className="fsn-catalog" dir="rtl">
      <div className="fsn-grid">
        {PRODUCTS.map((p) => (
          <article className="fsn-card" key={p.id}>
            <div className="fsn-media">
              <img
                src={p.img}
                alt={p.title}
                className="fsn-img main-img"
                loading="lazy"
              />
              <img
                src={p.hoverImg}
                alt={p.title}
                className="fsn-img hover-img"
                loading="lazy"
              />
            </div>

            <div className="fsn-info">
              <h3 className="fsn-title" title={p.title}>
                {p.title}
              </h3>

              <div className="fsn-price">
                <span className="fsn-currency">.{p.currency}</span> {p.price}
              </div>

              <div className="fsn-meta">
                <span className="fsn-count">{p.count}</span>
                <div className="fsn-swatches">
                  {p.colors.map((c, i) => (
                    <span key={i} className="fsn-swatch" style={{ "--c": c }} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
