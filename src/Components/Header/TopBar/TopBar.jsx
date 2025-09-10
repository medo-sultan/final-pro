import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

import {
  FaPhoneAlt,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaUserCircle,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { useCart } from "../../../Context/useCart";
import "./TopBar.css";
import CartDrawer from "../../../Context/CartDrawer/CartDrawer";

import useWishlist from "../../../Context/useWishlist";

export default function TopBar({
  categories,
  languages,
  currencies,
  setShowLogin,
  setOpenCats,
  setOpenLang,
  setOpenCurrency,
  openCats,
  openLang,
  openCurrency,
  catRef,
  langRef,
  curRef,

  currentProduct = null,
}) {
  const { count } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const slug = (s = "") =>
    s
      .toLowerCase()
      .trim()
      .replace(/[\s&]+/g, "")
      .replace(/[^a-z]/g, "");

  const CAT_ROUTES = {
    electronics: "/Mobile",
    homekitchen: "/Furniture",
    fashion: "/Woman", // أو "/Man" حسب رغبتك
    healthbeauty: "/Cosmetics",
    sportsoutdoors: "/Categories",
    automotive: "/Autopart",
    toysgames: "/GameBoy",
    books: "/Book",
    groceries: "/Supermarket",
    officesupplies: "/Categories",
    about: "/About",
    blog: "/blog",
    discounts: "/discount",
    myinfinity: "/MyInfinity",
    categories: "/Categories",
    offers: "/Offers",
  };

  const resolveCategoryPath = (name) => CAT_ROUTES[slug(name)] || "/Categories";

  // ===== حالة المستخدم ومنيو الحساب =====
  const [user, setUser] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userRef = useRef(null);
  const { items, add, remove, has } = useWishlist(); // لو كنت مستخدمهم بالفعل، سيبهم زي ما هم
  const wcount = items?.length ?? 0;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // ===== Wishlist (استقبال اللايك) =====

  const currentId =
    currentProduct?.id ?? currentProduct?.sku ?? currentProduct?.title ?? null;
  const liked = currentId ? has(currentId) : false;

  const handleHeartClick = () => {
    // لو فيه currentProduct → استقبل اللايك هنا
    if (currentProduct && currentId) {
      if (!liked) {
        add(currentProduct);
      } else {
        // لو حابب تخلي الهارت toggle، سيب السطر ده
        remove(currentId);
      }
      // افتح صفحة الـwishlist ومعاك state للتأكيد (اختياري)
      navigate("/Wishlist", { state: { justAdded: currentProduct } });
      return;
    }
    // لو مفيش منتج (أيقونة عامة في التوب بار) → افتح الصفحة فقط
    navigate("/Wishlist");
  };

  // حمل المستخدم من التخزين + استمع لأي تغيير
  useEffect(() => {
    const loadUser = () => {
      const u = JSON.parse(
        localStorage.getItem("user") || sessionStorage.getItem("user") || "null"
      );
      setUser(u);
    };
    loadUser();

    const onStorage = (e) => {
      if (e.key === "user") loadUser();
    };
    window.addEventListener("storage", onStorage);

    const onAuthChanged = () => loadUser();
    window.addEventListener("auth:changed", onAuthChanged);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("auth:changed", onAuthChanged);
    };
  }, []);

  // إغلاق منيو الحساب عند الضغط خارجها
  useEffect(() => {
    const handler = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // البحث
  const handleSearch = (e) => {
    if (e?.preventDefault) e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setOpenCats?.(false);
    setOpenLang?.(false);
    setOpenCurrency?.(false);
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  // تسجيل الخروج
  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
    setUserMenuOpen(false);
    navigate("/MyAccount");
  };

  const displayName = user?.username || "My Account";

  return (
    <div className="tb-container">
      <div className="tb-left">
        <Link to="/" className="tb-logo" aria-label="Sultan home">
          <img
            src="/logo.png"
            srcSet="/logo.png 1x, /logo@2x.png 2x"
            alt="Sultan Logo"
            width="200"
            height="80"
            className="tb-logo-img"
            loading="eager"
            decoding="async"
          />
        </Link>

        <div className="tb-contact">
          <FaPhoneAlt className="tb-contact-icon" />
          <span>Contact us 24/7</span>
          <a href="tel:+24996859994" className="tb-phone">
            (+249) 968599994
          </a>
        </div>
      </div>

      {/* Search Form */}
      <form className="tb-search" onSubmit={handleSearch}>
        {/* All Categories dropdown */}
        <div className="tb-cat" ref={catRef}>
          <button
            type="button"
            className="tb-select"
            onClick={() => setOpenCats((v) => !v)}
          >
            <span>All Categories</span>
            <IoIosArrowDown />
          </button>
          {openCats && (
            <ul className="tb-menu">
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    to={resolveCategoryPath(c)}
                    className="tb-item"
                    onClick={() => setOpenCats(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="text"
          className="tb-input"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className="tb-search-btn" aria-label="Search">
          <FaSearch />
        </button>
      </form>

      <div className="tb-right">
        {/* Language dropdown */}
        <div className="tb-drop" ref={langRef}>
          <button
            type="button"
            className="tb-select"
            onClick={() => setOpenLang((v) => !v)}
          >
            <span>English</span>
            <IoIosArrowDown />
          </button>
          {openLang && (
            <ul className="tb-menu tb-menu-right">
              {languages.map((l) => (
                <li key={l.code}>
                  <button type="button" className="tb-item">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Currency dropdown */}
        <div className="tb-drop" ref={curRef}>
          <button
            type="button"
            className="tb-select"
            onClick={() => setOpenCurrency((v) => !v)}
          >
            <span>USD</span>
            <IoIosArrowDown />
          </button>
          {openCurrency && (
            <ul className="tb-menu tb-menu-right">
              {currencies.map((c) => (
                <li key={c}>
                  <button type="button" className="tb-item">
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ====== Account (login or user menu) ====== */}
        {user ? (
          <div className="tb-user" ref={userRef}>
            <button
              type="button"
              className="tb-user-btn"
              onClick={() => setUserMenuOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={userMenuOpen}
            >
              <FaUserCircle className="tb-user-avatar" />
              <span className="tb-user-name">{displayName}</span>
              <IoIosArrowDown />
            </button>

            {userMenuOpen && (
              <ul className="tb-menu tb-menu-right">
                <li>
                  <Link
                    className="tb-item"
                    to="/dashboard"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <FaTachometerAlt className="tb-icon" />
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="tb-item"
                    to="/MyAccount"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <FaUser className="tb-icon" />
                    <span>My Account</span>
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    className="tb-item tb-logout"
                    onClick={logout}
                  >
                    <FaSignOutAlt className="tb-icon" />
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <button
            type="button"
            className="tb-login-btn"
            onClick={() => setShowLogin(true)}
            aria-label="Account"
            title="Login / Register"
          >
            <FaUser />
          </button>
        )}

        {/* ====== Wishlist Heart (يستقبل اللايك) ====== */}
        <button
          type="button"
          aria-label="Wishlist"
          className={`tb-wishlist-btn ${liked ? "is-liked" : ""}`}
          onClick={handleHeartClick}
          title={liked ? "Wishlisted" : "Add to wishlist"}
        >
          <FaHeart />
          {wcount > 0 && (
            <span
              className="tb-wishlist-count"
              aria-label={`${wcount} in wishlist`}
            >
              {wcount > 99 ? "99+" : wcount}
            </span>
          )}
        </button>

        {/* عدّاد السلة ديناميكي */}
        <button
          type="button"
          className="tb-cart"
          aria-label="Cart"
          onClick={() => setCartOpen(true)}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            cursor: "pointer",
          }}
        >
          <FaShoppingCart />
          {count > 0 && <span className="tb-cart-count">{count}</span>}
        </button>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </div>
  );
}
