import React, { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Wishlist.css";

import useWishlist from "../../Context/useWishlist";

export default function Wishlist() {
  const { items, add, remove, clear } = useWishlist();
  const location = useLocation();

  // استقبال إضافة من صفحات تانية عبر state
  useEffect(() => {
    const p = location.state?.justAdded;
    if (p) add(p);
  }, [location.state, add]);

  // استقبال إضافة عبر URL ?add=...&title=...&price=...&image=...&brand=...&sku=...
  const sp = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  useEffect(() => {
    const id = sp.get("add");
    if (!id) return;
    const product = {
      id,
      title: sp.get("title") || "Untitled",
      price: Number(sp.get("price")) || 0,
      image: sp.get("image") || "",
      brand: sp.get("brand") || "",
      sku: sp.get("sku") || id,
    };
    add(product);
  }, [sp, add]);

  if (!items.length) {
    return (
      <div className="wl-container">
        <div className="wl-header">
          <h1>My Wishlist</h1>
        </div>
        <p className="muted">
          No items yet. Browse the <Link to="/shop">shop</Link> and tap ♥ to add
          products.
        </p>
      </div>
    );
  }

  return (
    <div className="wl-container">
      <div className="wl-header">
        <h1>My Wishlist</h1>
        <button className="wl-clear" type="button" onClick={clear}>
          Clear all
        </button>
      </div>

      <ul className="wl-list">
        {items.map((it) => (
          <li className="wl-item" key={it.id}>
            <img src={it.image} alt={it.title} className="wl-thumb" />

            <div className="wl-info">
              <Link
                to={`/product/${it.id}`}
                state={{ product: it }}
                className="wl-title"
              >
                {it.title}
              </Link>

              <div className="wl-meta">
                {it.brand ? <span className="brand">{it.brand}</span> : null}
                <span className="sku">SKU: {it.sku}</span>
              </div>

              <div className="wl-price">${Number(it.price).toFixed(2)}</div>
            </div>

            <div className="wl-actions">
              <Link
                to={`/product/${it.id}`}
                state={{
                  product: {
                    ...it,
                    images: it.images?.length
                      ? it.images
                      : [it.image || it.img].filter(Boolean),
                  },
                }}
                className="btn"
              >
                View
              </Link>

              <button
                className="btn danger"
                type="button"
                onClick={() => remove(it.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
