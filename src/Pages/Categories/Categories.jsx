// ===== Categories.jsx =====
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Categories.css";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";

// ---------- Helpers ----------
const parseNum = (v, fallback) => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

const fallbackPills = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "mens-shirts",
];

const normalizePrice = (v) =>
  typeof v === "number" ? v : Number(String(v).replace(/[^\d.]/g, "")) || 0;

const toProductDetails = (p) => ({
  id: p.id,
  title: p.title,
  price: normalizePrice(p.price),
  oldPrice:
    p.discountPercentage != null
      ? Math.round(p.price / (1 - p.discountPercentage / 100))
      : undefined,
  image: p.thumbnail,
  images: Array.isArray(p.images) && p.images.length ? p.images : [p.thumbnail],
  img: p.thumbnail,
  brand: p.brand,
  rating: p.rating ?? 4.5,
  features: ["Brand: " + (p.brand || "—"), "Category: " + (p.category || "—")],
  stock: "In stock",
  discountBadge:
    p.discountPercentage != null ? `-${Math.round(p.discountPercentage)}%` : "",
  sku: `SKU-${p.id}`,
  categories: [p.category || "Categories"],
});

export default function CategoriesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // نقرأ البارامترات مباشرةً من URLSearchParams كل رندر
  const sp = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const page = parseNum(sp.get("page"), 1);
  const perPage = parseNum(sp.get("perPage"), 28); // 28 | 56 | 84
  const sortBy = sp.get("sort") || "latest"; // latest | price-asc | price-desc
  const view = sp.get("view") || "list"; // list | grid
  const category = sp.get("category") || "all"; // all | <slug>

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [catList, setCatList] = useState(fallbackPills);

  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);

  // تنقّل SPA بدون Refresh
  const navigateWithParams = (nextPage, override = {}) => {
    const sp2 = new URLSearchParams(location.search);
    sp2.set("page", String(nextPage));
    sp2.set("perPage", String(override.perPage ?? perPage));
    sp2.set("sort", override.sort ?? sortBy);
    sp2.set("view", override.view ?? view);
    sp2.set("category", override.category ?? category);
    navigate({ search: `?${sp2.toString()}` }, { replace: false });
  };

  const goPrev = () => navigateWithParams(Math.max(1, safePage - 1));
  const goNext = () => navigateWithParams(Math.min(totalPages, safePage + 1));
  const goToPage = (n) => navigateWithParams(n);
  const changePerPage = (n) => navigateWithParams(1, { perPage: n });
  const changeSort = (val) => navigateWithParams(1, { sort: val });
  const changeView = (val) => navigateWithParams(safePage, { view: val });
  const changeCategory = (slug) => navigateWithParams(1, { category: slug });

  const openDetails = (p) => {
    const product = toProductDetails(p);
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        const slugs = Array.isArray(data)
          ? data
              .map((c) => (typeof c === "string" ? c : c?.slug || c?.name))
              .filter(Boolean)
          : fallbackPills;
        if (!cancelled && slugs.length) setCatList(slugs);
      } catch {
        // fallback already set
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // هات المنتجات حسب category/page/perPage
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const skip = (safePage - 1) * perPage;
        const url =
          category && category !== "all"
            ? `https://dummyjson.com/products/category/${encodeURIComponent(
                category
              )}?limit=${perPage}&skip=${skip}`
            : `https://dummyjson.com/products?limit=${perPage}&skip=${skip}`;

        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();

        const arr = Array.isArray(data.products) ? data.products : [];
        setItems(arr);
        setTotal(Number(data.total) || arr.length || 0);
      } catch (e) {
        if (e.name !== "AbortError") console.error(e);
        setItems([]);
        setTotal(0);
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    })();
    return () => controller.abort();
  }, [category, safePage, perPage]);

  // sort داخل الصفحة الحالية
  const pageItems = useMemo(() => {
    if (sortBy === "price-asc")
      return [...items].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc")
      return [...items].sort((a, b) => b.price - a.price);
    return items;
  }, [items, sortBy]);

  // توليد أرقام الصفحات (window + ellipsis)
  const maxButtons = 5;
  const getPageNumbers = () => {
    if (totalPages <= maxButtons)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, safePage - half);
    let end = Math.min(totalPages, start + maxButtons - 1);
    if (end - start + 1 < maxButtons) start = Math.max(1, end - maxButtons + 1);
    const arr = [];
    if (start > 1) arr.push(1, "ellipsis-left");
    for (let n = start; n <= end; n++) arr.push(n);
    if (end < totalPages) arr.push("ellipsis-right", totalPages);
    return arr;
  };

  // حساب عرض النتائج
  const showingFrom = total ? (safePage - 1) * perPage + 1 : 0;
  const showingTo = Math.min(safePage * perPage, total);

  return (
    <div className="cs-container">
      {/* Header */}
      <div className="cs-header">
        <nav className="cs-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>{" "}
          <span className="cs-breadcrumb-arrow">›</span>
          <span>Shop</span>
        </nav>
        <h1 className="cs-title">Shop</h1>

        {/* Category pills (from API) */}
        <div className="cs-categories" role="tablist" aria-label="Categories">
          <button
            key="all"
            role="tab"
            className={`cs-category-btn ${
              category === "all" ? "is-active" : ""
            }`}
            onClick={() => changeCategory("all")}
            aria-selected={category === "all"}
            type="button"
          >
            All
          </button>
          {catList.map((c) => {
            const slug = typeof c === "string" ? c : c?.slug || c?.name;
            if (!slug) return null;
            const isActive = category === slug;
            return (
              <button
                key={slug}
                role="tab"
                className={`cs-category-btn ${isActive ? "is-active" : ""}`}
                onClick={() => changeCategory(slug)}
                aria-selected={isActive}
                title={slug}
                type="button"
              >
                {slug}
              </button>
            );
          })}
        </div>
      </div>

      <div className="cs-main">
        {/* Sidebar */}
        <aside className="cs-sidebar" aria-label="Category Sidebar">
          <div className="cs-sidecard">
            <div className="cs-sidecard-title">Browse</div>
            <ul className="cs-side-list">
              <li>
                <button
                  className={`cs-side-link ${
                    category === "all" ? "is-active" : ""
                  }`}
                  type="button"
                  onClick={() => changeCategory("all")}
                >
                  All
                </button>
              </li>
              {catList.map((c) => {
                const slug = typeof c === "string" ? c : c?.slug || c?.name;
                if (!slug) return null;
                return (
                  <li key={slug}>
                    <button
                      className={`cs-side-link ${
                        category === slug ? "is-active" : ""
                      }`}
                      type="button"
                      onClick={() => changeCategory(slug)}
                    >
                      {slug}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <div className="cs-results">
          {/* Top controls */}
          <div className="cs-results-top">
            <span>
              Showing {showingFrom}-{showingTo} of {total} results
              {category !== "all" ? ` in “${category}”` : ""}
            </span>

            <div className="cs-view-opts">
              Show:
              <button
                className={perPage === 28 ? "is-active" : ""}
                onClick={() => changePerPage(28)}
                type="button"
              >
                28
              </button>
              <button
                className={perPage === 56 ? "is-active" : ""}
                onClick={() => changePerPage(56)}
                type="button"
              >
                56
              </button>
              <button
                className={perPage === 84 ? "is-active" : ""}
                onClick={() => changePerPage(84)}
                type="button"
              >
                84
              </button>
              Sort:
              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => changeSort(e.target.value)}
              >
                <option value="latest">Sort by latest</option>
                <option value="price-asc">Sort by price: Low to High</option>
                <option value="price-desc">Sort by price: High to Low</option>
              </select>
              <button
                className={`cs-grid-btn ${view === "grid" ? "is-active" : ""}`}
                onClick={() => changeView("grid")}
                aria-label="Grid view"
                title="Grid view"
                type="button"
              >
                ▦
              </button>
              <button
                className={`cs-list-btn ${view === "list" ? "is-active" : ""}`}
                onClick={() => changeView("list")}
                aria-label="List view"
                title="List view"
                type="button"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Product list */}
          {loading ? (
            <div style={{ opacity: 0.7 }}>Loading…</div>
          ) : (
            <div
              className={`cs-product-list ${
                view === "grid" ? "is-grid" : "is-list"
              }`}
            >
              {pageItems.map((product) =>
                view === "list" ? (
                  <article className="cs-product-card" key={product.id}>
                    {product.discountPercentage ? (
                      <div className="cs-product-discount">
                        -{Math.round(product.discountPercentage)}%
                      </div>
                    ) : null}

                    <button
                      type="button"
                      className="as-link"
                      onClick={() => openDetails(product)}
                      aria-label={`Open ${product.title}`}
                      title="Open details"
                      style={{ alignSelf: "flex-start" }}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="cs-product-image"
                        loading="lazy"
                      />
                    </button>

                    <div className="cs-product-info">
                      <h3
                        className="cs-product-title"
                        style={{ cursor: "pointer" }}
                        onClick={() => openDetails(product)}
                        title="Open details"
                      >
                        {product.title}
                      </h3>
                      <div className="cs-product-prices">
                        <span className="cs-product-price">
                          ${product.price}
                        </span>
                        {product.discountPercentage ? (
                          <span className="cs-product-oldprice">
                            $
                            {Math.round(
                              product.price /
                                (1 - product.discountPercentage / 100)
                            )}
                          </span>
                        ) : null}
                      </div>
                      <div className="cs-product-info__divider"></div>
                      <ul className="cs-product-features">
                        {product.brand && (
                          <li>
                            <span className="cs-product-check">✓</span> Brand:{" "}
                            {product.brand}
                          </li>
                        )}
                        {product.category && (
                          <li>
                            <span className="cs-product-check">✓</span>{" "}
                            Category: {product.category}
                          </li>
                        )}
                      </ul>
                      <div className="cs-product-bottom"></div>
                    </div>

                    <div className="cs-product-actions">
                      <button
                        className="cs-product-btn cs-quick-view"
                        type="button"
                        onClick={() => openDetails(product)}
                        title="Quick View"
                      >
                        <span role="img" aria-label="eye">
                          👁️
                        </span>{" "}
                        QUICK VIEW
                      </button>

                      <AddToCartButton
                        item={{
                          id: product.id,
                          title: product.title,
                          price: normalizePrice(product.price),
                          image: product.thumbnail,
                        }}
                        className="cs-product-btn cs-add-cart"
                        label="+ ADD TO CART"
                      />
                    </div>
                  </article>
                ) : (
                  <article className="cs-product-card" key={product.id}>
                    {product.discountPercentage ? (
                      <div className="cs-product-discount">
                        -{Math.round(product.discountPercentage)}%
                      </div>
                    ) : null}

                    <button
                      type="button"
                      className="as-link"
                      onClick={() => openDetails(product)}
                      aria-label={`Open ${product.title}`}
                      title="Open details"
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="cs-product-image"
                        loading="lazy"
                      />
                    </button>

                    <div className="cs-product-info">
                      <h3
                        className="cs-product-title"
                        style={{ cursor: "pointer" }}
                        onClick={() => openDetails(product)}
                        title="Open details"
                      >
                        {product.title}
                      </h3>
                      <div className="cs-product-prices">
                        <span className="cs-product-price">
                          ${product.price}
                        </span>
                        {product.discountPercentage ? (
                          <span className="cs-product-oldprice">
                            $
                            {Math.round(
                              product.price /
                                (1 - product.discountPercentage / 100)
                            )}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          )}

          {/* Pagination */}
          <div
            className="cs-pagination"
            role="navigation"
            aria-label="Pagination"
          >
            <button
              disabled={safePage === 1}
              onClick={goPrev}
              className="cs-page-btn cs-prev"
              type="button"
            >
              Prev
            </button>

            {getPageNumbers().map((item, idx) =>
              typeof item === "number" ? (
                <button
                  key={idx}
                  className={`cs-page-btn ${
                    item === safePage ? "is-active" : ""
                  }`}
                  onClick={() => goToPage(item)}
                  type="button"
                >
                  {item}
                </button>
              ) : (
                <span key={idx} className="cs-page-ellipsis">
                  …
                </span>
              )
            )}

            <button
              disabled={safePage === totalPages}
              onClick={goNext}
              className="cs-page-btn cs-next"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
