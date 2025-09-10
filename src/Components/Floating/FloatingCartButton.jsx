import React, { useState } from "react";
import { useCart } from "../../Context/useCart";

import "./FloatingCartButton.css";

export default function FloatingCartButton() {
  const { cart, count } = useCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <button
        className="floating-cart-btn"
        onClick={() => setShowCart((v) => !v)}
        aria-label="سلة الطلبات"
        type="button"
      >
        <i className="fa fa-shopping-cart"></i>
        {count > 0 && <span className="cart-count">{count}</span>}
      </button>

      {showCart && (
        <div className="cart-modal" onClick={() => setShowCart(false)}>
          <div
            className="cart-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h5>سلة الطلبات</h5>
            {cart.length === 0 ? (
              <p>السلة فارغة</p>
            ) : (
              <ul>
                {cart.map((item, idx) => (
                  <li key={item.key || item.id || idx}>
                    {item.title} {item.qty ? `× ${item.qty}` : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
