// src/components/Homepage.jsx
import "./Homepage.css";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

/**
 * Mega dropdown content.
 * Props:
 *  - show: boolean
 *  - usePortal?: boolean = false
 *  - anchorElId?: string = "nav-homepages-anchor"
 *  - positionMode?: "under-anchor" | "center" = "under-anchor"
 */
export default function Homepage({
  show,
  usePortal = false,
  anchorElId = "nav-homepages-anchor",
  positionMode = "under-anchor",
}) {
  const [coords, setCoords] = useState(null);

  // عند استخدام Portal + تموضع أسفل الزر: احسب الإحداثيات
  useEffect(() => {
    if (!usePortal || !show) return;
    if (positionMode !== "under-anchor") return;

    const anchor = document.getElementById(anchorElId);
    if (!anchor) return;

    const update = () => {
      const r = anchor.getBoundingClientRect();
      setCoords({
        top: Math.round(r.bottom),
        left: Math.round(r.left + r.width / 2),
      });
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [usePortal, show, anchorElId, positionMode]);

  const content = (
    <div
      className={`homepages-dropdown ${usePortal ? "portaled" : ""} ${
        show ? "show" : ""
      }`}
      role="menu"
      aria-hidden={!show}
      aria-labelledby={anchorElId}
      style={
        usePortal
          ? positionMode === "center"
            ? {
                position: "fixed",
                top: "var(--header-height, 64px)",
                left: "50%",
                transform: "translate(-50%, 0)",
              }
            : coords
            ? {
                position: "fixed",
                top: coords.top,
                left: coords.left,
                transform: "translateX(-50%)",
              }
            : {
                position: "fixed",
                top: "var(--header-height, 64px)",
                left: "50%",
                transform: "translate(-50%, 0)",
              }
          : undefined
      }
    >
      <div className="homepages-dropdown-grid">
        <Link to="/Supermarket" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/organic-food_1284-798.jpg?t=st=1756003694~exp=1756007294~hmac=2531fc37631e82f682285d0ebfe82af69edb547fea5d1ae2ce548486335251fc&w=1480"
            alt="Supermarket 01"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">Supermarket</div>
        </Link>

        <Link to="/Mobile" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/gradient-mobile-store-logo-template_23-2149732022.jpg?t=st=1756003852~exp=1756007452~hmac=2089ca45aa91e3a60118797af9b2753d7690f70c43a998196d634b25f428ac0b&w=1480"
            alt="Mobile"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">MOBILE</div>
        </Link>

        <Link to="/MAN" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/gentleman-shop-logo-vector-templates-design_460848-6922.jpg?t=st=1756004282~exp=1756007882~hmac=a452a51de0c49d1956d8902f6b3b0e570078b27931e18de108ed63aeb1596896&w=1480"
            alt="Man"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">MAN</div>
        </Link>

        <Link to="/WOMAN" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/silhouette-woman-with-shopping-bags_23-2147516705.jpg?t=st=1756004553~exp=1756008153~hmac=e8705805e84f25ae37229a768321baf899f1870258e712a78ff50524bbee72b1&w=1480"
            alt="Woman"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">WOMAN</div>
        </Link>

        <Link to="/GameBOY" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/joyful-kids-fun-zone-banner-children-playroom_1017-51472.jpg?t=st=1756004766~exp=1756008366~hmac=2d668df02db6afe7aab4990e86e7378f057cc487fb0b1925d43620966e95bf94&w=1480"
            alt="Boy"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">BOY</div>
        </Link>

        <Link to="/autopart" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/gradient-auto-parts-logo-design_52683-86802.jpg?t=st=1756004993~exp=1756008593~hmac=c59fa746c096694d36c20d1e98c1950863c60fed05821bcf033188a0826b0fa7&w=1480"
            alt="Autopart"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">Autopart</div>
        </Link>

        <Link to="/cosmetics" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/premium-psd/cosmetic-products-mockup_1051-2905.jpg?w=1480"
            alt="Cosmetics"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">Cosmetics</div>
        </Link>

        <Link to="/MyInfinity" className="homepage-item" role="menuitem">
          <img
            src="https://img.freepik.com/free-vector/infinity-icon_1034-617.jpg?t=st=1756005825~exp=1756009425~hmac=a3fca55cd329b98a2fef46c8329ed11131ab9de16603a4231df365b9070ada31&w=1480"
            alt="Infinity"
            width="360"
            height="220"
            loading="lazy"
            decoding="async"
          />
          <div className="homepage-title">Infinity</div>
        </Link>
      </div>
    </div>
  );

  return usePortal ? createPortal(content, document.body) : content;
}
