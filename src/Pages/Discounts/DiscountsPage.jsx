import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DiscountsPage.css";
import { products } from "./products";
import { FaSearch, FaHeart } from "react-icons/fa";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";

const categories = [
  "Autopart",
  "Beauty & Health",
  "Electronic",
  "Fashion",
  "Game Accessories",
  "Home & Decor",
  "Laptop & Computer",
  "Phone & Tablet",
  "TV, Audio - Video",
];

const brandsList = [
  { name: "Amazon", count: 8 },
  { name: "Apple", count: 11 },
  { name: "Ashley", count: 3 },
  { name: "Asus", count: 3 },
  { name: "Basett", count: 5 },
  { name: "Cerave", count: 2 },
  { name: "Clinique", count: 4 },
];

const priceRanges = [
  { label: "0 - $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "$500+", min: 500, max: Infinity },
];

const sizes = ["Small", "Medium", "Large"];
const storageOptions = ["32 GB", "64 GB", "128 GB", "256 GB"];
const ratings = [5, 4, 3, 2, 1];

const colors = [
  { name: "Black", code: "#222", count: 95 },
  { name: "Blue", code: "#337CCF", count: 11 },
  { name: "Brown", code: "#C79F6F", count: 26 },
  { name: "Burgundy", code: "#7C2348", count: 1 },
  { name: "Cool Pink", code: "#FCB2B2", count: 1 },
  { name: "Deep Purple", code: "#3F0071", count: 1 },
  { name: "Gray", code: "#D2D2D2", count: 25 },
  { name: "Green", code: "#23CE6B", count: 15 },
  { name: "Light Brown", code: "#E2C799", count: 4 },
  { name: "Navy", code: "#27374D", count: 9 },
  { name: "Orange", code: "#FFA500", count: 4 },
  { name: "Pink", code: "#FBA1B7", count: 16 },
  { name: "Purple", code: "#7D5FFF", count: 3 },
  { name: "Red", code: "#E11", count: 15 },
  { name: "Rosewood", code: "#65000B", count: 1 },
  { name: "True Cotal", code: "#F2EFEA", count: 1 },
  { name: "White", code: "#FFF", count: 34 },
];

// حوّل أي قيمة سعر لرقم
const normalizePrice = (v) =>
  typeof v === "number" ? v : Number(String(v).replace(/[^\d.]/g, "")) || 0;

// شكل موحّد لصفحة التفاصيل
const toProductDetails = (p) => ({
  id: p.id,
  title: p.title,
  price: normalizePrice(p.price),
  oldPrice: p.oldPrice != null ? normalizePrice(p.oldPrice) : undefined,
  image: p.image,
  images: p.images?.length ? p.images : [p.image].filter(Boolean),
  img: p.image,
  brand: p.brand,
  rating: p.rating ?? 4.5,
  features: p.features?.length
    ? p.features
    : ["Feature 1", "Feature 2", "Feature 3"],
  stock: p.stock ?? "In stock",
  discountBadge: p.discount,
  sku: p.sku ?? `SKU-${p.id}`,
  categories: p.categories?.length ? p.categories : ["Discounts"],
});

export default function DiscountsPage() {
  const navigate = useNavigate();

  // Advanced filter states
  const [brandSearch, setBrandSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Shop page controls
  const [showSaleOnly, setShowSaleOnly] = useState(true);
  const [view, setView] = useState("list"); // 'list' | 'grid'
  const [sortBy, setSortBy] = useState("latest"); // 'latest' | 'price-asc' | 'price-desc'
  const [perPage, setPerPage] = useState(28); // 28 | 56 | 84
  const [page, setPage] = useState(1);

  // Filter brands by search
  const filteredBrands = useMemo(() => {
    return brandsList.filter((brand) =>
      brand.name.toLowerCase().includes(brandSearch.toLowerCase())
    );
  }, [brandSearch]);

  // Advanced filter logic
  const filtered = useMemo(() => {
    let arr = products;
    if (showSaleOnly) arr = arr.filter((p) => p.sale);

    if (selectedBrands.length) {
      arr = arr.filter((prod) => selectedBrands.includes(prod.brand));
    }
    if (selectedPrices.length) {
      arr = arr.filter((prod) =>
        selectedPrices.some(
          (pr) => prod.price >= pr.min && prod.price <= pr.max
        )
      );
    }
    if (priceMin && priceMax) {
      arr = arr.filter(
        (prod) =>
          prod.price >= Number(priceMin) && prod.price <= Number(priceMax)
      );
    }
    if (selectedSizes.length) {
      arr = arr.filter((prod) => selectedSizes.includes(prod.size));
    }
    if (selectedStorage.length) {
      arr = arr.filter((prod) => selectedStorage.includes(prod.storage));
    }
    if (selectedRatings.length) {
      arr = arr.filter((prod) => selectedRatings.includes(prod.rating));
    }
    if (selectedColors.length) {
      arr = arr.filter((prod) => selectedColors.includes(prod.color));
    }
    if (sortBy === "price-asc")
      arr = [...arr].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc")
      arr = [...arr].sort((a, b) => b.price - a.price);

    return arr;
  }, [
    showSaleOnly,
    selectedBrands,
    selectedPrices,
    priceMin,
    priceMax,
    selectedSizes,
    selectedStorage,
    selectedRatings,
    selectedColors,
    sortBy,
  ]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * perPage;
  const pageItems = filtered.slice(startIdx, startIdx + perPage);

  const handlePerPage = (n) => {
    setPerPage(n);
    setPage(1);
  };

  const openDetails = (p) => {
    const product = toProductDetails(p);
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <div className="shop-container">
      <div className="shop-header">
        <nav className="shop-breadcrumb" aria-label="Breadcrumb">
          <span>Home</span> <span className="shop-breadcrumb-arrow">›</span>
          <span>Shop</span>
        </nav>
        <h1 className="shop-title">Shop</h1>
        <div className="shop-categories" role="tablist" aria-label="Categories">
          {categories.map((cat) => (
            <button
              className="shop-category-btn"
              key={cat}
              role="tab"
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="shop-main">
        {/* ===== Sidebar Filters ===== */}
        <aside className="shop-filters">
          {/* Brands Filter */}
          <div className="shop-filter-block">
            <div className="shop-filter-title">Brands</div>
            <div className="shop-filter-search">
              <input
                type="text"
                placeholder="search brands ..."
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
              />
              <span className="shop-filter-search-icon">&#128269;</span>
            </div>
            <ul className="shop-brands-list">
              {filteredBrands.map((brand) => (
                <li key={brand.name}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand.name)}
                      onChange={(e) => {
                        setSelectedBrands(
                          e.target.checked
                            ? [...selectedBrands, brand.name]
                            : selectedBrands.filter((b) => b !== brand.name)
                        );
                      }}
                    />
                    {brand.name}{" "}
                    <span className="shop-brand-count">({brand.count})</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="shop-filter-block">
            <div className="shop-filter-title">Price</div>
            <ul className="shop-price-list">
              {priceRanges.map((pr) => (
                <li key={pr.label}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(pr)}
                      onChange={(e) => {
                        setSelectedPrices(
                          e.target.checked
                            ? [...selectedPrices, pr]
                            : selectedPrices.filter((p) => p !== pr)
                        );
                      }}
                    />
                    {pr.label}
                  </label>
                </li>
              ))}
            </ul>
            <div className="shop-price-custom">
              <input
                type="number"
                placeholder="100"
                value={priceMin}
                min="0"
                onChange={(e) => setPriceMin(e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="200"
                value={priceMax}
                min="0"
                onChange={(e) => setPriceMax(e.target.value)}
              />
              <button className="shop-price-filter-btn" type="button">
                FILTER
              </button>
            </div>
          </div>

          {/* Size Filter */}
          <div className="shop-filter-block">
            <div className="shop-filter-title">Size</div>
            <ul className="shop-size-list">
              {sizes.map((size) => (
                <li key={size}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedSizes.includes(size)}
                      onChange={(e) => {
                        setSelectedSizes(
                          e.target.checked
                            ? [...selectedSizes, size]
                            : selectedSizes.filter((s) => s !== size)
                        );
                      }}
                    />
                    {size}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage Capacity Filter */}
          <div className="shop-filter-block">
            <div className="shop-filter-title">Storage Capacity</div>
            <ul className="shop-storage-list">
              {storageOptions.map((storage) => (
                <li key={storage}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedStorage.includes(storage)}
                      onChange={(e) => {
                        setSelectedStorage(
                          e.target.checked
                            ? [...selectedStorage, storage]
                            : selectedStorage.filter((s) => s !== storage)
                        );
                      }}
                    />
                    {storage}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Rating Filter */}
          <div className="shop-filter-block">
            <div className="shop-filter-title">Customer Rating</div>
            <ul className="shop-rating-list">
              {ratings.map((rating) => (
                <li key={rating}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedRatings.includes(rating)}
                      onChange={(e) => {
                        setSelectedRatings(
                          e.target.checked
                            ? [...selectedRatings, rating]
                            : selectedRatings.filter((r) => r !== rating)
                        );
                      }}
                    />
                    <span>
                      {Array.from({ length: rating }, (_, i) => (
                        <span
                          key={i}
                          style={{ color: "#FFD700", fontSize: "1.1em" }}
                        >
                          ★
                        </span>
                      ))}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Colors Filter */}
          <div className="shop-filter-block">
            <div className="shop-filter-title">Colors</div>
            <ul className="shop-color-list">
              {colors.map((col) => (
                <li key={col.name} className="shop-color-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(col.name)}
                      onChange={(e) => {
                        setSelectedColors(
                          e.target.checked
                            ? [...selectedColors, col.name]
                            : selectedColors.filter((c) => c !== col.name)
                        );
                      }}
                    />
                    <span
                      className="shop-color-dot"
                      style={{ background: col.code }}
                    />
                    {col.name}{" "}
                    <span className="shop-color-count">{col.count}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* ===== Results ===== */}
        <div className="shop-results">
          <div className="shop-results-top">
            <span>
              Showing {total === 0 ? 0 : startIdx + 1}-
              {Math.min(startIdx + perPage, total)} of {total} results
            </span>

            <label className="shop-sale-checkbox">
              <input
                type="checkbox"
                checked={showSaleOnly}
                onChange={(e) => {
                  setShowSaleOnly(e.target.checked);
                  setPage(1);
                }}
              />
              Show only products on sale
            </label>

            <div className="shop-view-opts">
              Show:
              <button
                className={perPage === 28 ? "is-active" : ""}
                onClick={() => handlePerPage(28)}
                type="button"
              >
                28
              </button>
              <button
                className={perPage === 56 ? "is-active" : ""}
                onClick={() => handlePerPage(56)}
                type="button"
              >
                56
              </button>
              <button
                className={perPage === 84 ? "is-active" : ""}
                onClick={() => handlePerPage(84)}
                type="button"
              >
                84
              </button>
              Sort:
              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
              >
                <option value="latest">Sort by latest</option>
                <option value="price-asc">Sort by price: Low to High</option>
                <option value="price-desc">Sort by price: High to Low</option>
              </select>
              <button
                className={`shop-grid-btn ${
                  view === "grid" ? "is-active" : ""
                }`}
                onClick={() => setView("grid")}
                aria-label="Grid view"
                title="Grid view"
                type="button"
              >
                ▦
              </button>
              <button
                className={`shop-list-btn ${
                  view === "list" ? "is-active" : ""
                }`}
                onClick={() => setView("list")}
                aria-label="List view"
                title="List view"
                type="button"
              >
                ☰
              </button>
            </div>
          </div>

          <div
            className={`shop-product-list ${
              view === "grid" ? "is-grid" : "is-list"
            }`}
          >
            {pageItems.map((product) =>
              view === "list" ? (
                <article className="shop-product-card" key={product.id}>
                  {product.discount && (
                    <div className="shop-product-discount">
                      {product.discount}
                    </div>
                  )}

                  <button
                    type="button"
                    className="as-link"
                    onClick={() => openDetails(product)}
                    aria-label={`Open ${product.title}`}
                    title="Open details"
                    style={{ alignSelf: "flex-start" }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="shop-product-image"
                      loading="lazy"
                    />
                  </button>

                  <div className="shop-product-info">
                    <h3
                      className="shop-product-title"
                      style={{ cursor: "pointer" }}
                      onClick={() => openDetails(product)}
                      title="Open details"
                    >
                      {product.title}
                    </h3>

                    <div className="shop-product-prices">
                      <span className="shop-product-price">
                        ${product.price}
                      </span>
                      {product.oldPrice != null && (
                        <span className="shop-product-oldprice">
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>

                    <div className="shop-product-info__divider" />

                    <ul className="shop-product-features">
                      {(product.features || []).slice(0, 4).map((f, i) => (
                        <li key={i}>
                          <span className="shop-product-check">&#10003;</span>{" "}
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="shop-product-bottom">
                      <button
                        className="as-link shop-wishlist"
                        type="button"
                        title="Add to wishlist"
                      >
                        <FaHeart /> Add to wishlist
                      </button>
                      <button
                        className="as-link shop-compare"
                        type="button"
                        title="Add to compare"
                      >
                        ⇄ Add to compare
                      </button>
                    </div>
                  </div>

                  <div className="shop-product-actions">
                    <button
                      className="shop-product-btn shop-quick-view"
                      type="button"
                      onClick={() => openDetails(product)}
                      title="Quick View"
                    >
                      <FaSearch /> QUICK VIEW
                    </button>

                    <AddToCartButton
                      item={{
                        id: product.id,
                        title: product.title,
                        price: normalizePrice(product.price),
                        image: product.image,
                      }}
                      className="shop-product-btn"
                      label="+ ADD TO CART"
                    />
                  </div>
                </article>
              ) : (
                <article className="shop-product-card" key={product.id}>
                  {product.discount && (
                    <div className="shop-product-discount">
                      {product.discount}
                    </div>
                  )}

                  <button
                    type="button"
                    className="as-link"
                    onClick={() => openDetails(product)}
                    aria-label={`Open ${product.title}`}
                    title="Open details"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="shop-product-image"
                      loading="lazy"
                    />
                  </button>

                  <div className="shop-product-info">
                    <h3
                      className="shop-product-title"
                      style={{ cursor: "pointer" }}
                      onClick={() => openDetails(product)}
                      title="Open details"
                    >
                      {product.title}
                    </h3>
                    <div className="shop-product-prices">
                      <span className="shop-product-price">
                        ${product.price}
                      </span>
                      {product.oldPrice != null && (
                        <span className="shop-product-oldprice">
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className="shop-pagination"
              role="navigation"
              aria-label="Pagination"
            >
              <button
                disabled={safePage === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                type="button"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  className={n === safePage ? "is-active" : ""}
                  onClick={() => setPage(n)}
                  type="button"
                >
                  {n}
                </button>
              ))}
              <button
                disabled={safePage === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                type="button"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
