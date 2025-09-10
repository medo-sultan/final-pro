import React, { useEffect, useState, useRef } from "react";

/**
 * زر رجوع لأعلى
 * props:
 *  - threshold: بعد كام بكسل يبدأ يظهر الزر (افتراضي 300)
 *  - selector: اختياري، لو عندك كونتينر بيسكروّل داخلي (مثال: ".app-content")
 *  - smooth: true للتمرير السلس (افتراضي)
 */
export default function BackToTop({
  threshold = 300,
  selector = "",
  smooth = true,
}) {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0); // نسبة تقدم السحب
  const scrollElRef = useRef(null);

  useEffect(() => {
    const el = selector ? document.querySelector(selector) : window;
    scrollElRef.current = el;

    const getTop = () =>
      selector
        ? el.scrollTop
        : window.pageYOffset || document.documentElement.scrollTop;
    const getHeight = () => {
      if (selector) {
        const sc = el;
        return sc.scrollHeight - sc.clientHeight;
      }
      const doc = document.documentElement;
      return doc.scrollHeight - doc.clientHeight;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const top = getTop();
        setShow(top > threshold);
        const total = getHeight() || 1;
        setProgress(Math.min(100, Math.max(0, (top / total) * 100)));
        ticking = false;
      });
    };

    // اسمع حدث السحب
    if (selector) {
      el.addEventListener("scroll", onScroll, { passive: true });
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    onScroll();

    return () => {
      if (selector) {
        el.removeEventListener("scroll", onScroll);
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, [selector, threshold]);

  const scrollToTop = () => {
    const el = scrollElRef.current;
    if (!el) return;

    // احترام تفضيل تقليل الحركة
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior = smooth && !prefersReduced ? "smooth" : "auto";

    if (selector && el.scrollTo) {
      el.scrollTo({ top: 0, left: 0, behavior });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  };

  // دائرة تقدّم بسيطة
  const C = 38; // محيط تقريبي (strokeDasharray)
  const offset = C - (C * progress) / 100;

  return (
    <button
      type="button"
      className={`btt ${show ? "btt--show" : ""}`}
      onClick={scrollToTop}
      aria-label="الرجوع إلى أعلى الصفحة"
      title="أعلى"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToTop();
        }
      }}
    >
      <svg className="btt__svg" viewBox="0 0 24 24" aria-hidden="true">
        {/* مسار الخلفية */}
        <circle cx="12" cy="12" r="10" className="btt__ring-bg" />
        {/* مسار التقدّم */}
        <circle
          cx="12"
          cy="12"
          r="10"
          className="btt__ring"
          strokeDasharray={C}
          strokeDashoffset={offset}
        />
        {/* السهم */}
        <path className="btt__arrow" d="M12 7l-5 5h3v4h4v-4h3l-5-5z" />
      </svg>
    </button>
  );
}
