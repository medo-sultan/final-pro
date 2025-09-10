import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCheck,
  FaHeart,
  FaBalanceScale,
  FaShareAlt,
  FaExpand,
} from "react-icons/fa";
import "./ProductDetails.css";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";
import FlashDeals from "../Home/FlashDeals/FlashDeals";
import CashBackBanner from "../../Components/CashBackBanner/CashBackBanner";

/** نجوم التقييم */
function Stars({ rating = 0 }) {
  const r = Number(rating) || 0;
  const items = [];
  for (let i = 1; i <= 5; i++) {
    if (r >= i) items.push(<FaStar key={i} />);
    else if (r >= i - 0.5) items.push(<FaStarHalfAlt key={i} />);
    else items.push(<FaRegStar key={i} />);
  }
  return (
    <span className="stars" style={{ display: "inline-flex", gap: 2 }}>
      {items}
    </span>
  );
}
Stars.propTypes = { rating: PropTypes.number };

/** عدّاد بسيط */
function useCountdown(initialSec = 0) {
  const [sec, setSec] = useState(initialSec);
  useEffect(() => {
    if (sec <= 0) return;
    const t = setInterval(() => setSec((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [sec]);
  const h = String(Math.floor(sec / 3600)).padStart(2, "0");
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return { h, m, s, setSec };
}

export function ProductDetails({ product, onBack }) {
  const navigate = useNavigate(); // <-- كنا مفتقدينها
  const hasProduct = !!product;
  const normalizeImage = (url) => {
    if (!url) return "";
    if (/^https?:\/\//i.test(url)) return url; // خارجي
    if (url.startsWith("/")) return url; // من الجذر
    return `/${url.replace(/^\.?\//, "")}`; // نسبي → مطلق
  };

  // صور المنتج
  const images = useMemo(() => {
    if (!hasProduct) return [];
    const raw = [
      ...(Array.isArray(product.images) ? product.images : []),
      product.image,
      product.img,
    ].filter(Boolean);

    // طبّع ثم اشيل المكرّر
    const normalized = raw.map(normalizeImage);
    const unique = Array.from(new Set(normalized));
    return unique;
  }, [hasProduct, product]);

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const { h, m, s, setSec } = useCountdown(801 * 60 * 60 + 22 * 60 + 28);

  // سعر وتوفير
  const priceNow = useMemo(() => {
    if (!hasProduct) return 0;
    return typeof product.price === "number"
      ? product.price
      : Number(String(product.price).replace(/[^\d.]/g, "")) || 0;
  }, [hasProduct, product?.price]);

  const priceOld = useMemo(() => {
    if (!hasProduct || product.oldPrice == null) return undefined;
    return typeof product.oldPrice === "number"
      ? product.oldPrice
      : Number(String(product.oldPrice).replace(/[^\d.]/g, "")) || undefined;
  }, [hasProduct, product?.oldPrice]);

  const saveAmount =
    typeof priceNow === "number" &&
    typeof priceOld === "number" &&
    priceOld > priceNow
      ? priceOld - priceNow
      : undefined;

  // خصائص افتراضية
  const rating = Number(product?.rating ?? 4.5);
  const bullets = product?.features ?? [
    "Screen size 15.6”",
    "Intel Core i3",
    "Ram 8 GB",
  ];
  const stockText = product?.stock ?? "In stock";
  const discountBadge = product?.discount ?? product?.discountBadge ?? "-35%";

  useEffect(() => {
    if (!hasProduct) return;
    if (product.dealEndsInSeconds && Number(product.dealEndsInSeconds) > 0) {
      setSec(Number(product.dealEndsInSeconds));
    }
  }, [hasProduct, product?.dealEndsInSeconds, setSec]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // عنصر موحّد لإعادة الاستخدام
  const normalizedItem = useMemo(() => {
    if (!hasProduct) return null;
    return {
      id: product.id ?? product.sku ?? product.title,
      title: product.title,
      price: priceNow,
      image: product.image || product.img || product.images?.[0],
      brand: product.brand,
      variant: product.variant || product.color || product.size,
      images: product.images,
      img: product.img,
      sku: product.sku,
    };
  }, [hasProduct, product, priceNow]);

  // BUY NOW → Checkout بمنتج واحد والكمية
  const handleBuyNow = () => {
    if (!normalizedItem) return;
    navigate("/Checkout", {
      state: {
        items: [{ ...normalizedItem, qty }],
      },
    });
  };

  if (!hasProduct) return null;

  return (
    <div className="pd-container">
      <button onClick={onBack} className="pd-back">
        ← Back
      </button>

      <div className="pd-content">
        {/* ====== الجاليري ====== */}
        <div
          className={`pd-gallery ${
            images.length > 1 ? "has-thumbs" : "no-thumbs"
          }`}
        >
          {images.length > 1 && (
            <div className="pd-thumbs">
              {images.map((src, i) => (
                <button
                  key={src || i}
                  className={`pd-thumb ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Thumbnail ${i + 1}`}
                  type="button"
                >
                  <img src={src} alt={`Thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>
          )}

          <div className="pd-main">
            {discountBadge && <span className="pd-badge">{discountBadge}</span>}
            <button
              className="pd-zoom-btn"
              title="Fullscreen"
              aria-label="Open fullscreen image"
              type="button"
            >
              <FaExpand />
            </button>
            <img src={images[active]} alt={product.title} className="pd-img" />
          </div>
        </div>

        {/* ====== المعلومات ====== */}
        <div className="pd-info">
          <h1 className="pd-title">{product.title}</h1>

          <div className="pd-rating">
            <Stars rating={rating} />
            <span style={{ color: "#666" }}>{rating.toFixed(2)}</span>
            <button
              type="button"
              className="pd-link"
              onClick={() =>
                document
                  .getElementById("reviews")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Write a review
            </button>
          </div>

          <ul className="pd-bullets">
            {bullets.map((b, i) => (
              <li key={b || i}>
                <FaCheck color="#1a7f37" /> {b}
              </li>
            ))}
          </ul>

          <div className="pd-price-row">
            <div className="pd-price-now">
              {typeof product.price === "string"
                ? product.price
                : `$${priceNow}`}
            </div>
            {priceOld != null && (
              <>
                <div className="pd-price-old">
                  {typeof priceOld === "string" ? priceOld : `$${priceOld}`}
                </div>
                {saveAmount && (
                  <div className="pd-save">(Save ${saveAmount})</div>
                )}
              </>
            )}
          </div>

          <div className="pd-stock">
            <FaCheck /> {stockText}
          </div>

          <div className="pd-timer">
            <div className="box">{h}</div>
            <div className="box">{m}</div>
            <div className="box">{s}</div>
          </div>

          {/* ====== الأزرار ====== */}
          <div className="pd-row">
            <div className="pd-qty">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)}>
                +
              </button>
            </div>

            <AddToCartButton
              item={normalizedItem}
              qty={qty}
              className="pd-btn primary"
              label="+ ADD TO CART"
              onAdded={() => {
                // ممكن تظهر Toast هنا
              }}
            />

            <button type="button" className="pd-btn buy" onClick={handleBuyNow}>
              BUY NOW
            </button>
          </div>

          <div className="pd-subactions">
            <span className="icon">
              <FaHeart /> Add to wishlist
            </span>
            <span className="icon">
              <FaBalanceScale /> Add to compare
            </span>
          </div>

          <div className="pd-offer">
            <h4>Special offer</h4>
            <ul>
              <li>
                <FaCheck color="#1a7f37" /> 10% off, maximum $20 when paying
                with PAYPAL
              </li>
              <li>
                <FaCheck color="#1a7f37" /> 50% off or More iPad Cases, Covers &
                Keyboard Folios
              </li>
            </ul>
          </div>

          <div className="pd-meta">
            <div>
              <strong>SKU:</strong> {product.sku || "69TFECSC5M"}
            </div>
            <div className="cats">
              <strong>Categories:</strong>{" "}
              {(product.categories?.length
                ? product.categories
                : ["Laptop", "Macbook", "MSI"]
              ).join(", ")}
            </div>
            <div className="pd-share">
              <FaShareAlt /> Share
            </div>
          </div>
        </div>
      </div>

      <CashBackBanner />
      <FlashDeals />
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
    features: PropTypes.arrayOf(PropTypes.string),
    stock: PropTypes.string,
    discount: PropTypes.string,
    discountBadge: PropTypes.string,
    sku: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    dealEndsInSeconds: PropTypes.number,
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  onBack: PropTypes.func,
};

ProductDetails.defaultProps = { onBack: () => window.history.back() };

export default function ProductDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate("/", { replace: true });
    return null;
  }

  return <ProductDetails product={product} onBack={() => navigate(-1)} />;
}
