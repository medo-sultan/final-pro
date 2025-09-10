import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/useCart";
import "./CartPage.css";

export default function CartPage() {
  const { items, inc, dec, removeFromCart, clear, subtotal } = useCart();
  const navigate = useNavigate();

  // شحن: مجاني / استلام محلي / سعر ثابت
  const [shippingMethod, setShippingMethod] = useState("free"); // free | pickup | flat
  const shippingCost = useMemo(() => {
    if (shippingMethod === "pickup") return 5;
    if (shippingMethod === "flat") return 10;
    return 0; // free
  }, [shippingMethod]);

  const total = subtotal + shippingCost;

  const onProceed = () => {
    if (!items.length) return;
    navigate("/Checkout", { state: { items } });
  };

  const onApplyCoupon = (e) => {
    e.preventDefault();
    // هنا مكان تطبيق الكوبون (API/منطق التخفيض)
    alert("Coupon applied (demo)");
  };

  if (!items.length) {
    return (
      <div className="cart-page container">
        <h1 className="cart-title">Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <nav className="cart-breadcrumb">
        Home › <span>Shopping Cart</span>
      </nav>
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-grid">
        {/* جدول السلة */}
        <div className="cart-table-card">
          <div className="cart-table-head">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          <ul className="cart-rows">
            {items.map((it) => (
              <li key={it.key || it.id} className="cart-row">
                <div className="cart-prod">
                  <img
                    src={it.image || it.img}
                    alt={it.name || it.title}
                    className="cart-img"
                  />
                  <div className="cart-prod-info">
                    <div className="cart-prod-title">{it.name || it.title}</div>
                    <div className="cart-prod-attrs">
                      {it.variant && <span>{it.variant}</span>}
                      {it.size && <span> • {it.size}</span>}
                      {it.color && <span> • {it.color}</span>}
                    </div>
                  </div>
                </div>

                <div className="cart-price">${Number(it.price).toFixed(2)}</div>

                <div className="cart-qty">
                  <button
                    className="qty-btn"
                    onClick={() => dec(it.key || it.id)}
                    aria-label="decrease"
                  >
                    −
                  </button>
                  <span className="qty-val">{it.qty}</span>
                  <button
                    className="qty-btn"
                    onClick={() => inc(it.key || it.id)}
                    aria-label="increase"
                  >
                    +
                  </button>
                </div>

                <div className="cart-subtotal">
                  ${(Number(it.price) * Number(it.qty)).toFixed(2)}
                </div>

                <button
                  className="cart-remove"
                  title="Remove"
                  onClick={() => removeFromCart(it.key || it.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          {/* أفعال تحت الجدول */}
          <div className="cart-actions">
            <form className="coupon" onSubmit={onApplyCoupon}>
              <input type="text" placeholder="Coupon code" />
              <button className="btn black" type="submit">
                APPLY COUPON
              </button>
            </form>

            <div className="table-buttons">
              <button className="btn ghost" onClick={clear}>
                EMPTY CART
              </button>
              <button className="btn disabled" type="button" disabled>
                UPDATE CART
              </button>
            </div>
          </div>
        </div>

        {/* بطاقة الإجمالي والشحن */}
        <aside className="cart-totals">
          <h3>Cart totals</h3>

          <div className="line">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
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
              <span>Local pickup: $5</span>
            </label>

            <label className="ship-option">
              <input
                type="radio"
                name="shipping"
                value="flat"
                checked={shippingMethod === "flat"}
                onChange={() => setShippingMethod("flat")}
              />
              <span>Flat rate: $10</span>
            </label>

            <p className="ship-note">
              Shipping options will be updated during checkout.
            </p>
            <button className="ship-calc" type="button">
              📦 Calculate shipping
            </button>
          </div>

          <div className="line total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button className="btn proceed" onClick={onProceed}>
            PROCEED TO CHECKOUT
          </button>
        </aside>
      </div>
    </div>
  );
}
