import React, { useMemo, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaCheckCircle, FaPrint, FaHome } from "react-icons/fa";
import "./OrderSuccess.css";

export default function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // البيانات الجاية من checkout
  const state = location.state || {};
  const items = Array.isArray(state.items) ? state.items : [];
  const total = typeof state.total === "number" ? state.total : 0;

  // رقم طلب تجريبي (تقدر تجيبه من السيرفر لو عندك API)
  const orderNo = useMemo(() => {
    // حاول استخراجه لو جالك من API
    if (state.orderId) return String(state.orderId);
    // otherwise: ولّد رقم بسيط
    const rnd = Math.floor(100000 + Math.random() * 900000);
    return `ORD-${rnd}`;
  }, [state.orderId]);

  // لو مفيش بيانات جايّة من الـ checkout، رجّع المستخدم
  useEffect(() => {
    if (!items.length && !total) {
      const t = setTimeout(() => navigate("/", { replace: true }), 2000);
      return () => clearTimeout(t);
    }
  }, [items.length, total, navigate]);

  return (
    <div className="os-container">
      <div className="os-card">
        <FaCheckCircle className="os-icon" />
        <h1 className="os-title">تم استلام طلبك بنجاح</h1>
        <p className="os-subtitle">شكرًا لثقتك. سنبدأ تجهيز طلبك فورًا.</p>

        <div className="os-orderbox">
          <div className="os-row">
            <span>رقم الطلب</span>
            <strong>{orderNo}</strong>
          </div>
          <div className="os-row">
            <span>إجمالي الدفع</span>
            <strong>{total.toLocaleString("ar-EG")} ج.م</strong>
          </div>
          <div className="os-row">
            <span>الحالة</span>
            <strong className="ok">قيد المعالجة</strong>
          </div>
        </div>

        {/* ملخص سريع للمنتجات */}
        {items.length > 0 && (
          <div className="os-list">
            <div className="os-list-head">
              <span>المنتج</span>
              <span>الكمية</span>
              <span>الإجمالي</span>
            </div>
            <ul>
              {items.map((it, idx) => {
                const title = it.title || it.name || "منتج";
                const image =
                  it.image ||
                  it.img ||
                  (Array.isArray(it.images) ? it.images[0] : "");
                const price = Number(it.price || 0);
                const qty = Number(it.qty || 1);
                return (
                  <li key={it.key || it.id || idx} className="os-item">
                    <div className="os-prod">
                      {image ? (
                        <img src={image} alt={title} />
                      ) : (
                        <div className="os-thumb-fallback" />
                      )}
                      <div className="os-prod-info">
                        <div className="os-prod-title">{title}</div>
                        <div className="os-prod-attrs">
                          {it.variant && <span>{it.variant}</span>}
                          {it.size && <span> • {it.size}</span>}
                          {it.color && <span> • {it.color}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="os-qty">x{qty}</div>
                    <div className="os-line-total">
                      {(price * qty).toLocaleString("ar-EG")} ج.م
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="os-actions">
          <button className="btn ghost" onClick={() => window.print()}>
            <FaPrint /> طباعة الفاتورة
          </button>
          <Link to="/" className="btn primary">
            <FaHome /> متابعة التسوق
          </Link>
        </div>

        {/* fallback وديّة لو مفيش بيانات */}
        {!items.length && !total ? (
          <p className="os-muted" style={{ marginTop: 12 }}>
            سيتم إعادتك للصفحة الرئيسية…
          </p>
        ) : null}
      </div>
    </div>
  );
}
