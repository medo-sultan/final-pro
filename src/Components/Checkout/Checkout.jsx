/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/useCart";
import "./Checkout.css";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items: cartItems, clear } = useCart();

  // 1) عناصر جاية من زر BUY NOW
  const stateItems = Array.isArray(location.state?.items)
    ? location.state.items
    : [];

  // 2) استخدمها لو موجودة، وإلا ارجع للسلة
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sourceItems = stateItems.length ? stateItems : cartItems || [];

  if (!sourceItems.length) {
    return (
      <div className="checkout-empty" dir="rtl">
        <h2>لا يوجد منتجات للدفع</h2>
        <button
          className="checkout-confirm-btn"
          onClick={() => navigate("/", { replace: true })}
        >
          العودة للمتجر
        </button>
      </div>
    );
  }

  // موحّد عناصر لعرض الصورة/العنوان/السعر/الكمية
  const items = useMemo(
    () =>
      sourceItems.map((it, idx) => ({
        id: it.id ?? it.key ?? idx,
        title: it.title ?? it.name ?? it.productName ?? "منتج",
        image:
          it.image ??
          it.img ??
          (Array.isArray(it.images) ? it.images[0] : "") ??
          "",
        price: Number(
          it.price ?? it.salePrice ?? it.finalPrice ?? it.unitPrice ?? 0
        ),
        qty: Math.max(1, Number(it.qty ?? 1)),
      })),
    [sourceItems]
  );

  // الإجماليات
  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );
  const [shippingMethod, setShippingMethod] = useState("free"); // free | pickup | flat
  const shippingCost =
    shippingMethod === "pickup" ? 5 : shippingMethod === "flat" ? 10 : 0;
  const tax = 0;
  const total = subtotal + shippingCost + tax;

  // Accordion: Login / Coupon
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);

  // Billing form
  const [bill, setBill] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Egypt",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    createAccount: false,
    username: "",
    password: "",
  });

  // Shipping form (اختياري)
  const [shipDiff, setShipDiff] = useState(false);
  const [ship, setShip] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "Egypt",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [orderNotes, setOrderNotes] = useState("");
  const [coupon, setCoupon] = useState("");

  // فاليوديشن بسيط
  const errors = useMemo(() => {
    const e = {};
    const b = bill;
    if (!b.firstName.trim()) e.firstName = "مطلوب";
    if (!b.lastName.trim()) e.lastName = "مطلوب";
    if (!b.address1.trim()) e.address1 = "مطلوب";
    if (!b.city.trim()) e.city = "مطلوب";
    if (!b.state.trim()) e.state = "مطلوب";
    if (!b.zip.trim()) e.zip = "مطلوب";
    if (!/^\+?\d{7,15}$/.test(b.phone.trim())) e.phone = "رقم غير صالح";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email.trim()))
      e.email = "بريد غير صالح";
    if (b.createAccount) {
      if (!b.username.trim()) e.username = "مطلوب";
      if (!b.password.trim()) e.password = "مطلوب";
    }
    if (shipDiff) {
      const s = ship;
      if (!s.firstName.trim()) e.s_firstName = "مطلوب";
      if (!s.lastName.trim()) e.s_lastName = "مطلوب";
      if (!s.address1.trim()) e.s_address1 = "مطلوب";
      if (!s.city.trim()) e.s_city = "مطلوب";
      if (!s.state.trim()) e.s_state = "مطلوب";
      if (!s.zip.trim()) e.s_zip = "مطلوب";
    }
    return e;
  }, [bill, ship, shipDiff]);

  const isValid = Object.keys(errors).length === 0;

  const onBill = (k) => (e) =>
    setBill((f) => ({
      ...f,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const onShip = (k) => (e) => setShip((f) => ({ ...f, [k]: e.target.value }));

  const onApplyCoupon = (e) => {
    e.preventDefault();
    // منطق الكوبون الفعلي هنا (API/خصم)
    alert(`Applied coupon: ${coupon || "(none)"}`);
  };

  const onPlaceOrder = (e) => {
    e.preventDefault();
    if (!isValid) return;

    // هنا تبعت طلبك (items + billing + shipping + coupon + method + notes) لـ API
    // لو نجح:
    clear(); // فضّي السلة (لو الطلب جاى من السلة)
    navigate("/order-success", {
      replace: true,
      state: { total, items }, // مهم: نبعت العناصر المستخدمة فعليًا
    });
  };

  return (
    <div className="checkout-container" dir="rtl">
      <div
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}
      >
        <nav style={{ color: "#6b7280", fontSize: 14, marginBottom: 8 }}>
          الرئيسية / <span style={{ color: "#111827" }}>الدفع</span>
        </nav>

        <h1 style={{ fontSize: 28, fontWeight: 800, margin: "6px 0 18px" }}>
          Checkout
        </h1>

        {/* عرض سريع للمنتجات المختارة */}
        <ul className="checkout-list" style={{ marginBottom: 16 }}>
          {items.map((it) => (
            <li
              key={it.id}
              className="checkout-item"
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: 12,
                padding: 10,
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                background: "#fff",
                marginBottom: 8,
              }}
            >
              <div
                className="checkout-image-wrap"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 10,
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                }}
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="checkout-image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="checkout-details">
                <div
                  className="checkout-product-title"
                  style={{ fontWeight: 800 }}
                >
                  {it.title}
                </div>
                <div className="checkout-row" style={{ gap: 8, marginTop: 4 }}>
                  <span className="checkout-label" style={{ color: "#6b7280" }}>
                    الكمية:
                  </span>
                  <span className="checkout-value" style={{ fontWeight: 800 }}>
                    {it.qty}
                  </span>
                </div>
                <div className="checkout-row" style={{ gap: 8 }}>
                  <span className="checkout-label" style={{ color: "#6b7280" }}>
                    السعر للوحدة:
                  </span>
                  <span className="checkout-price" style={{ fontWeight: 800 }}>
                    {it.price.toLocaleString("ar-EG")} ج.م
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Returning customer */}
        <div className="checkout-section">
          <button className="btn ghost" onClick={() => setShowLogin((v) => !v)}>
            Returning customer? <u>Click here to login</u>
          </button>
          {showLogin && (
            <div style={{ marginTop: 12 }}>
              <div className="grid-two">
                <div className="form-field">
                  <label>Username or email</label>
                  <input type="text" placeholder="your@email.com" />
                </div>
                <div className="form-field">
                  <label>Password</label>
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>
              <button className="btn black" style={{ marginTop: 8 }}>
                Login
              </button>
            </div>
          )}
        </div>

        {/* Coupon */}
        <div className="checkout-section">
          <button
            className="btn ghost"
            onClick={() => setShowCoupon((v) => !v)}
          >
            Have a coupon? <u>Click here to enter your code</u>
          </button>
          {showCoupon && (
            <form
              className="coupon"
              onSubmit={onApplyCoupon}
              style={{ marginTop: 12, display: "flex", gap: 8 }}
            >
              <input
                type="text"
                placeholder="Coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="btn black" type="submit">
                Apply coupon
              </button>
            </form>
          )}
        </div>

        <div
          className="cart-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24 }}
        >
          {/* Billing + Shipping + Notes */}
          <form onSubmit={onPlaceOrder} className="checkout-card">
            <h2 className="checkout-title">Billing details</h2>

            <div className="grid-two">
              <div className="form-field">
                <label>First name *</label>
                <input value={bill.firstName} onChange={onBill("firstName")} />
                {errors.firstName && (
                  <div className="error">{errors.firstName}</div>
                )}
              </div>
              <div className="form-field">
                <label>Last name *</label>
                <input value={bill.lastName} onChange={onBill("lastName")} />
                {errors.lastName && (
                  <div className="error">{errors.lastName}</div>
                )}
              </div>
            </div>

            <div className="form-field">
              <label>Company name (optional)</label>
              <input value={bill.company} onChange={onBill("company")} />
            </div>

            <div className="grid-two">
              <div className="form-field">
                <label>Country / Region *</label>
                <select value={bill.country} onChange={onBill("country")}>
                  <option>Egypt</option>
                  <option>Saudi Arabia</option>
                  <option>United Arab Emirates</option>
                  <option>Kuwait</option>
                  <option>Qatar</option>
                  <option>Zambia</option>
                </select>
              </div>
              <div className="form-field">
                <label>Phone *</label>
                <input
                  value={bill.phone}
                  onChange={onBill("phone")}
                  placeholder="+2010xxxxxxx"
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
              </div>
            </div>

            <div className="form-field">
              <label>Street address *</label>
              <input
                value={bill.address1}
                onChange={onBill("address1")}
                placeholder="House number and street name"
              />
              {errors.address1 && (
                <div className="error">{errors.address1}</div>
              )}
            </div>

            <div className="form-field">
              <label>Apartment, suite, unit, etc. (optional)</label>
              <input value={bill.address2} onChange={onBill("address2")} />
            </div>

            <div className="grid-two">
              <div className="form-field">
                <label>Town / City *</label>
                <input value={bill.city} onChange={onBill("city")} />
                {errors.city && <div className="error">{errors.city}</div>}
              </div>
              <div className="form-field">
                <label>State / County *</label>
                <input value={bill.state} onChange={onBill("state")} />
                {errors.state && <div className="error">{errors.state}</div>}
              </div>
            </div>

            <div className="grid-two">
              <div className="form-field">
                <label>Postcode / ZIP *</label>
                <input value={bill.zip} onChange={onBill("zip")} />
                {errors.zip && <div className="error">{errors.zip}</div>}
              </div>
              <div className="form-field">
                <label>Email address *</label>
                <input
                  type="email"
                  value={bill.email}
                  onChange={onBill("email")}
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
            </div>

            {/* Create account */}
            <label
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <input
                type="checkbox"
                checked={bill.createAccount}
                onChange={onBill("createAccount")}
              />
              Create an account?
            </label>

            {bill.createAccount && (
              <div className="grid-two" style={{ marginTop: 8 }}>
                <div className="form-field">
                  <label>Account username *</label>
                  <input value={bill.username} onChange={onBill("username")} />
                  {errors.username && (
                    <div className="error">{errors.username}</div>
                  )}
                </div>
                <div className="form-field">
                  <label>Create account password *</label>
                  <input
                    type="password"
                    value={bill.password}
                    onChange={onBill("password")}
                  />
                  {errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
              </div>
            )}

            {/* Ship to different address */}
            <div className="checkout-section" style={{ marginTop: 16 }}>
              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={shipDiff}
                  onChange={(e) => setShipDiff(e.target.checked)}
                />
                Ship to a different address?
              </label>

              {shipDiff && (
                <div style={{ marginTop: 12 }}>
                  <div className="grid-two">
                    <div className="form-field">
                      <label>First name *</label>
                      <input
                        value={ship.firstName}
                        onChange={onShip("firstName")}
                      />
                      {errors.s_firstName && (
                        <div className="error">{errors.s_firstName}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <label>Last name *</label>
                      <input
                        value={ship.lastName}
                        onChange={onShip("lastName")}
                      />
                      {errors.s_lastName && (
                        <div className="error">{errors.s_lastName}</div>
                      )}
                    </div>
                  </div>

                  <div className="grid-two">
                    <div className="form-field">
                      <label>Country / Region *</label>
                      <select value={ship.country} onChange={onShip("country")}>
                        <option>Egypt</option>
                        <option>Saudi Arabia</option>
                        <option>United Arab Emirates</option>
                        <option>Kuwait</option>
                        <option>Qatar</option>
                        <option>Zambia</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>Postcode / ZIP *</label>
                      <input value={ship.zip} onChange={onShip("zip")} />
                      {errors.s_zip && (
                        <div className="error">{errors.s_zip}</div>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Street address *</label>
                    <input
                      value={ship.address1}
                      onChange={onShip("address1")}
                    />
                    {errors.s_address1 && (
                      <div className="error">{errors.s_address1}</div>
                    )}
                  </div>

                  <div className="form-field">
                    <label>Apartment, suite, unit, etc. (optional)</label>
                    <input
                      value={ship.address2}
                      onChange={onShip("address2")}
                    />
                  </div>

                  <div className="grid-two">
                    <div className="form-field">
                      <label>Town / City *</label>
                      <input value={ship.city} onChange={onShip("city")} />
                      {errors.s_city && (
                        <div className="error">{errors.s_city}</div>
                      )}
                    </div>
                    <div className="form-field">
                      <label>State / County *</label>
                      <input value={ship.state} onChange={onShip("state")} />
                      {errors.s_state && (
                        <div className="error">{errors.s_state}</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order notes */}
            <div className="checkout-section">
              <label>Order notes (optional)</label>
              <textarea
                rows={3}
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
              />
            </div>

            <button className="checkout-confirm-btn" disabled={!isValid}>
              Place order • {total.toLocaleString("ar-EG")} ج.م
            </button>
          </form>

          {/* Order summary / Cart totals */}
          <aside className="cart-totals" style={{ alignSelf: "start" }}>
            <h3>Cart totals</h3>

            <div className="line">
              <span>Subtotal</span>
              <strong>{subtotal.toLocaleString("ar-EG")} ج.م</strong>
            </div>

            <div className="ship-box">
              <div className="ship-title">Shipping</div>

              <label className="ship-option">
                <input
                  type="radio"
                  name="shipping"
                  value="free"
                  checked={shippingMethod === "free"}
                  onChange={() => setShippingMethod("free")}
                />
                <span>Free shipping</span>
              </label>

              <label className="ship-option">
                <input
                  type="radio"
                  name="shipping"
                  value="pickup"
                  checked={shippingMethod === "pickup"}
                  onChange={() => setShippingMethod("pickup")}
                />
                <span>Local pickup: 5 ج.م</span>
              </label>

              <label className="ship-option">
                <input
                  type="radio"
                  name="shipping"
                  value="flat"
                  checked={shippingMethod === "flat"}
                  onChange={() => setShippingMethod("flat")}
                />
                <span>Flat rate: 10 ج.م</span>
              </label>

              <p className="ship-note">
                سيتم تحديث خيارات الشحن أثناء إتمام الطلب.
              </p>
              <button className="ship-calc" type="button">
                📦 حساب الشحن
              </button>
            </div>

            <div className="line total">
              <span>Total</span>
              <strong>{total.toLocaleString("ar-EG")} ج.م</strong>
            </div>

            <button
              className="btn proceed"
              onClick={() => {
                if (!isValid) return alert("اكمل بيانات الفاتورة أولاً");
                clear(); // فضّي السلة (لو في عناصر فيها)
                navigate("/order-success", {
                  replace: true,
                  state: { total, items }, // برضه نبعث العناصر الفعلية
                });
              }}
            >
              تأكيد الطلب الآن
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
