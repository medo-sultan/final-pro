import "./Perfumes.css";

const PRODUCTS = [
  {
    id: 1,
    title: "جينز بقصة حافة واسعة وخصر منخفض",
    price: "1,499.00",
    currency: "ج.م",
    colors: ["#263238", "#4b5563", "#2a2f33"],
    img: "https://img.freepik.com/free-photo/bottle-perfume-based-soil-ingredients_23-2150756836.jpg?t=st=1757085410~exp=1757089010~hmac=e135bfd691de801cd2d7ec93e786dfd7c5c8c8092c7ec7418ea308a406c05832&w=1480",
    hoverImg:
      "https://img.freepik.com/free-photo/bottle-perfume-based-soil-ingredients_23-2150756829.jpg?t=st=1757085451~exp=1757089051~hmac=a51c91716638857e31b71dfaea06f454f9b4e58d7a71f74302b7b70ea26c23e5&w=1480",
    count: "3+",
  },
  {
    id: 2,
    title: "بنطلون مزود برباط",
    price: "1,499.00",
    currency: "ج.م",
    colors: ["#a1a1aa", "#6b7280", "#111827"],
    img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:283a3fc9-f898-4248-85e5-367c3845f899/as/EID-dce1b2e93be5398234c3eb7fce7cfdbe07996a0e.jpg?preferwebp=true&width=1366&auto=webp",
    hoverImg:
      "https://media.alshaya.com/adobe/assets/urn:aaid:aem:ddcc29ca-cd15-4bec-8038-a2dd1c8b18ca/as/EID-c7266a8129e9913795ed721ec4f72cd2b7cd0834.jpg?width=450&height=675&preferwebp=true",
    count: "2+",
  },
  {
    id: 3,
    title: "سكورت ميني",
    price: "1,199.00",
    currency: "ج.م",
    colors: ["#b1b5bd", "#9aa3af", "#6b7280"],
    img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:9dc7da1c-8d01-4d37-86d5-a0b51a156cd8/as/EID-7da8cc3c1d4358d799a175e4d8d6da73cb64ff4c.jpg?width=450&height=675&preferwebp=true",
    hoverImg:
      "https://media.alshaya.com/adobe/assets/urn:aaid:aem:dfe0d58d-c833-42c4-a5a1-7177a2b8bf29/as/EID-433d4e31d6ff0fa441335c7224caf9bd6371de7b.jpg?width=450&height=675&preferwebp=true",
    count: "1+",
  },
  {
    id: 4,
    title: "بليزر بصفي أزرار مزدوج",
    price: "2,999.00",
    currency: "ج.م",
    colors: ["#0f172a", "#1f2937", "#111827"],
    img: "https://media.alshaya.com/adobe/assets/urn:aaid:aem:e5714e77-6c80-4818-acb6-21c45e838c8b/as/EID-d5d1134f761ff3ebabfd704449067986194fdc46.jpg?width=450&height=675&preferwebp=true",
    hoverImg:
      "https://media.alshaya.com/adobe/assets/urn:aaid:aem:1ce46481-7f41-479e-83c2-c87fadb80edc/as/EID-fcbd3041abaed211090cd1b1546eb95e4fe66a9f.jpg?width=450&height=675&preferwebp=true",
    count: "2+",
  },
];

export default function Perfumes() {
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
