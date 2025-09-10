import React from "react";
import "./CartDrawer.css";
import { FaTimes, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/useCart"; // أو المسار اللي فيه hook بيعمل useContext(CartContext)

export default function CartDrawer({ open, onClose }) {
  const {
    items, // نفس state.items
    count, // إجمالي القطع
    subtotal, // مجموع الأسعار
    inc, // inc(item.key)
    dec, // dec(item.key)
    removeFromCart, // removeFromCart(item.key)
    clear, // تفريغ السلة
  } = useCart();

  const navigate = useNavigate();

  const handleCheckoutAll = () => {
    if (!items?.length) return;
    // مهم: طابق حالة الأحرف مع الراوتر الفعلي
    navigate("/Checkout", { state: { items } });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-drawer-overlay${open ? " open" : ""}`}
        onClick={onClose}
      ></div>

      <aside className={`cart-drawer${open ? " open" : ""}`}>
        <div className="cart-drawer-header">
          <h2>
            Shopping Cart{" "}
            <span className="cart-drawer-count">
              ({count} {count === 1 ? "item" : "items"})
            </span>
          </h2>
          <button className="cart-drawer-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="cart-drawer-body">
          {count === 0 ? (
            <div className="cart-drawer-empty">
              <FaShoppingCart size={96} color="#e0e0e0" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <ul className="cart-drawer-list">
              {items.map((item) => (
                <li key={item.key} className="cart-drawer-item">
                  <img
                    src={item.image || item.img}
                    alt={item.name || item.title}
                  />

                  <div className="cart-drawer-item-info">
                    <div className="cart-drawer-item-title">
                      {item.name || item.title}
                    </div>

                    {/* خصائص المنتج (لو عندك variant/size/color) */}
                    <div className="cart-drawer-item-attrs">
                      {item.variant && <span>{item.variant}</span>}
                      {item.size && <span> • {item.size}</span>}
                      {item.color && <span> • {item.color}</span>}
                    </div>

                    <div className="cart-drawer-item-meta">
                      <div className="qty-controls">
                        <button
                          className="qty-btn"
                          onClick={() => dec(item.key)}
                          aria-label="Decrease"
                        >
                          −
                        </button>
                        <span className="qty-value">x{item.qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => inc(item.key)}
                          aria-label="Increase"
                        >
                          +
                        </button>
                      </div>

                      <span className="cart-drawer-item-price">
                        ${Number(item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* زر الحذف */}
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.key)}
                    title="Remove"
                    aria-label="Remove item"
                  >
                    <FaTimes />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-drawer-footer">
          <div className="cart-drawer-subtotal">
            <span>Subtotal</span>
            <strong>${Number(subtotal).toFixed(2)}</strong>
          </div>

          <div className="cart-drawer-free">
            Free Shipping on All Orders Over{" "}
            <span className="cart-drawer-free-red">$250</span>
          </div>

          <div className="cart-drawer-actions">
            <button
              className="cart-drawer-continue"
              onClick={() => {
                onClose();
                navigate("/cart");
              }}
            >
              View Cart
            </button>

            <button
              type="button"
              className="pd-btn buy"
              disabled={!items?.length}
              onClick={handleCheckoutAll}
            >
              BUY NOW
            </button>

            {/* تفريغ السلة */}
            <button
              type="button"
              className="cart-drawer-clear"
              disabled={!items?.length}
              onClick={clear}
              title="Clear Cart"
            >
              CLEAR
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
