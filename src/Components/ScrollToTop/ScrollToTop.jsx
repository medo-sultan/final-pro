// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto", selector = "" }) {
  const { pathname, hash } = useLocation();

  // عطّل استرجاع الاسكرول الافتراضي من المتصفح للـ SPA
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      return () => (window.history.scrollRestoration = prev);
    }
  }, []);

  useEffect(() => {
    // لو فيه هاش، جرّب تروح له
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // لو عندك كونتينر داخلي للسكرول
    if (selector) {
      const box = document.querySelector(selector);
      if (box && typeof box.scrollTo === "function") {
        box.scrollTo({ top: 0, left: 0, behavior });
        return;
      }
    }

    // الافتراضي: نافذة المتصفح
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, hash, selector, behavior]);

  return null;
}
