import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import TopBar from "./TopBar/TopBar";
import NavBar from "./NavBar/NavBar";
import "./Header.css";
import SidebarCategories from "./Sidebar/SidebarCategories";
import Login from "../../Pages/Login/Login";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [homeDrop, setHomeDrop] = useState(false);
  const [catDrop, setCatDrop] = useState(false);
  const [prodDrop, setProdDrop] = useState(false);
  const [pagesDrop, setPagesDrop] = useState(false);
  const [recentDrop, setRecentDrop] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [openCats, setOpenCats] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);

  // إظهار/إخفاء الـNavBar حسب اتجاه الاسكرول
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const THRESH = 6; // حساسية تغيير الاتجاه
  const NAV_HIDE_START = 80; // بعد كام بكسل يبدأ الإخفاء عند النزول

  const homeTimeout = useRef();
  const catTimeout = useRef();
  const prodTimeout = useRef();
  const pagesTimeout = useRef();
  const catRef = useRef(null);
  const langRef = useRef(null);
  const curRef = useRef(null);
  const topbarRef = useRef(null); // لقياس ارتفاع التوب بار

  const navigate = useNavigate();

  const handleEnter = (setDrop, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setDrop(true);
  };
  const handleLeave = (setDrop, timeoutRef) => {
    timeoutRef.current = setTimeout(() => setDrop(false), 140);
  };

  useEffect(() => {
    function onClickOutside(e) {
      if (catRef.current && !catRef.current.contains(e.target))
        setOpenCats(false);
      if (langRef.current && !langRef.current.contains(e.target))
        setOpenLang(false);
      if (curRef.current && !curRef.current.contains(e.target))
        setOpenCurrency(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // قياس ارتفاع الـTopBar وكتابته في CSS var
  useLayoutEffect(() => {
    const setH = () => {
      const h = topbarRef.current?.offsetHeight || 72;
      document.documentElement.style.setProperty("--topbar-h", `${h}px`);
    };
    setH();
    // إعادة القياس عند تغيير حجم النافذة
    window.addEventListener("resize", setH);
    return () => window.removeEventListener("resize", setH);
  }, []);

  // اتجاه الاسكرول: نزول = أخفي، طلوع = أظهر
  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      const goingDown = dy > THRESH;
      const goingUp = dy < -THRESH;

      setScrolled(y > 2);

      if (y <= NAV_HIDE_START) {
        setShowNav(true);
      } else if (goingDown) {
        setShowNav(false);
      } else if (goingUp) {
        setShowNav(true);
      }

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ========= Categories =========
  const categories = [
    "Electronics",
    "Home & Kitchen",
    "Fashion",
    "Health & Beauty",
    "Sports & Outdoors",
    "Automotive",
    "Toys & Games",
    "Books",
    "Groceries",
    "Office Supplies",
  ];

  const slug = (s = "") =>
    s
      .toLowerCase()
      .trim()
      .replace(/[\s&]+/g, "")
      .replace(/[^a-z]/g, "");

  const CAT_ROUTES = {
    electronics: "/Mobile",
    homekitchen: "/Furniture",
    fashion: "/Woman",
    healthbeauty: "/Cosmetics",
    sportsoutdoors: "/Categories",
    automotive: "/Autopart",
    toysgames: "/GameBoy",
    books: "/Book",
    groceries: "/Supermarket",
    officesupplies: "/Categories",
  };

  const resolveCategoryPath = (name) => CAT_ROUTES[slug(name)] || "/Categories";

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "es", label: "Español" },
  ];
  const currencies = ["USD", "EUR", "SAR", "AED", "EGP"];

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        {/* ====== Mobile Header ====== */}
        <div className="mobile-header">
          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(true)}
            type="button"
          >
            <FaBars />
          </button>
          <Link to="/" className="logo">
            Su<span className="logo-accent">LT</span>an
          </Link>
          <div className="header-icons">
            <button className="icon-btn" type="button">
              <FaSearch />
            </button>
            <Link to="/cart" className="cart-icon">
              <FaShoppingCart />
              <span className="cart-count">0</span>
            </Link>
          </div>
        </div>

        {/* ====== Desktop Header ====== */}
        <div className="desktop-header">
          {/* TopBar ثابت (fixed) */}
          <div className="topbar-fixed" ref={topbarRef}>
            <TopBar
              categories={categories}
              languages={languages}
              currencies={currencies}
              setShowLogin={setShowLogin}
              setOpenCats={setOpenCats}
              setOpenLang={setOpenLang}
              setOpenCurrency={setOpenCurrency}
              openCats={openCats}
              openLang={openLang}
              openCurrency={openCurrency}
              catRef={catRef}
              langRef={langRef}
              curRef={curRef}
            />
          </div>

          {/* NavBar: يظهر ويختفي حسب اتجاه الاسكرول */}
          <div className={`navbar-wrapper ${showNav ? "" : "is-hidden"}`}>
            <NavBar
              setIsSidebarOpen={setIsSidebarOpen}
              homeDrop={homeDrop}
              setHomeDrop={setHomeDrop}
              catDrop={catDrop}
              setCatDrop={setCatDrop}
              prodDrop={prodDrop}
              setProdDrop={setProdDrop}
              pagesDrop={pagesDrop}
              setPagesDrop={setPagesDrop}
              recentDrop={recentDrop}
              setRecentDrop={setRecentDrop}
              homeTimeout={homeTimeout}
              catTimeout={catTimeout}
              prodTimeout={prodTimeout}
              pagesTimeout={pagesTimeout}
              handleEnter={handleEnter}
              handleLeave={handleLeave}
            />
          </div>
        </div>
      </header>

      {/* مفيش header-spacer هنا؛ إحلناها ب-padding-top للـ .desktop-header */}
      {isSidebarOpen && (
        <SidebarCategories
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectCategory={(cat) => {
            const label = cat?.name || cat?.label || String(cat);
            const path = resolveCategoryPath(label);
            setIsSidebarOpen(false);
            navigate(path);
            window.scrollTo({ top: 0, left: 0 });
          }}
        />
      )}

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
}
