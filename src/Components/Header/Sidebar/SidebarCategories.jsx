import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SidebarCategories.css";

/* ===== SVG Icons ===== */
const icons = {
  Fashion: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L18 6L20 10L16 14V21H8V14L4 10L6 6L12 3Z"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  "Phone & Tablet": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="7"
        y="2"
        width="10"
        height="20"
        rx="2"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="19" r="1" fill="#222" />
    </svg>
  ),
  "Laptop & Computer": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="8" y="18" width="8" height="2" rx="1" fill="#222" />
    </svg>
  ),
  "TV, Audio – Video": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="2"
        y="5"
        width="20"
        height="13"
        rx="2"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="7" y="19" width="10" height="2" rx="1" fill="#222" />
    </svg>
  ),
  "Camera & Photo": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="4"
        y="8"
        width="16"
        height="10"
        rx="2"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="12"
        cy="13"
        r="3"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="9" y="3" width="6" height="3" rx="1.5" fill="#222" />
    </svg>
  ),
  "Home & Decor": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12L12 4L21 12V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V12Z"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="9" y="15" width="6" height="7" fill="#222" />
    </svg>
  ),
  "Beauty & Health": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse
        cx="12"
        cy="8"
        rx="6"
        ry="4"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <rect
        x="8"
        y="12"
        width="8"
        height="8"
        rx="2"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
  "Game Accessories": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="8"
        width="14"
        height="8"
        rx="3"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="7.5" cy="12" r="1" fill="#222" />
      <circle cx="16.5" cy="12" r="1" fill="#222" />
    </svg>
  ),
  Autopart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="#222"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  ),
};

const defaultIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#222" strokeWidth="1.5" fill="none" />
  </svg>
);

/**
 * ملاحظة:
 * - استخدمت iconKey لاختيار الأيقونة من قاموس icons.
 * - لو عندك Route جاهز للتبويب، مرّر path عشان يظهر كـ <Link>.
 */
const categories = [
  { name: "Supermarket", iconKey: "Supermarket", path: "/Supermarket" }, // ← دي Link
  { name: "Phone & ", iconKey: "Phone & Tablet", path: "/Mobile" },
  { name: "Laptop & Computer", iconKey: "Laptop & Computer", path: "/MAN" },
  { name: "TV, Audio – Video", iconKey: "TV, Audio – Video", path: "/Woman" },
  { name: "Camera & Photo", iconKey: "Camera & Photo", path: "/GameBoy" },
  { name: "Home & Decor", iconKey: "Home & Decor", path: "/cosmetics" },
  { name: "Autopart", iconKey: "Autopart", path: "/Autopart" },
  { name: "Beauty & Health", iconKey: "Beauty & Health", path: "/MyInfinity" },
];

export default function SidebarCategories({
  isOpen,
  onClose,
  onSelectCategory,
}) {
  // Body scroll lock بدون قفزة
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sc-noscroll");
      const scrollBarW =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarW > 0) {
        document.body.style.setProperty(
          "padding-right",
          scrollBarW + "px",
          "important"
        );
      }
    } else {
      document.body.classList.remove("sc-noscroll");
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.classList.remove("sc-noscroll");
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // إغلاق بـ ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const renderItemInner = (cat) => (
    <>
      <span className="sc-icon">{icons[cat.iconKey] || defaultIcon}</span>
      <span className="sc-name">{cat.name}</span>
      {cat.hasSub && (
        <span className="sc-arrow" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 20 20">
            <polyline
              points="7 5 13 10 7 15"
              fill="none"
              stroke="#bbb"
              strokeWidth="2"
            />
          </svg>
        </span>
      )}
    </>
  );

  return (
    <>
      <div
        className={`sc-overlay ${isOpen ? "sc-show" : ""}`}
        onClick={onClose}
      />
      <aside
        className={`sc-drawer ${isOpen ? "sc-open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="sc-header">
          <span className="sc-title">
            <span className="sc-header-icon">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <rect x="3" y="6" width="16" height="2" rx="1" fill="#fff" />
                <rect x="3" y="10" width="16" height="2" rx="1" fill="#fff" />
                <rect x="3" y="14" width="16" height="2" rx="1" fill="#fff" />
              </svg>
            </span>
            SHOP BY CATEGORIES
          </span>
          <button className="sc-close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>

        <ul className="sc-list" role="menu">
          {categories.map((cat) => {
            const content = renderItemInner(cat);

            // لو فيه path نستخدم Link، غير كده نستخدم زر
            return (
              <li key={cat.name} className="sc-item" role="none">
                {cat.path ? (
                  <Link
                    to={cat.path}
                    className="sc-link"
                    role="menuitem"
                    onClick={onClose}
                  >
                    {content}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="sc-btn"
                    role="menuitem"
                    onClick={() => {
                      onSelectCategory?.(cat.name);
                      onClose?.();
                    }}
                  >
                    {content}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
