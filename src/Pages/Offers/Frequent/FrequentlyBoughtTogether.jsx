import React from "react";
import "../Offers.css";

export default function FrequentlyBoughtTogether({ title, items }) {
  const total = items.reduce((sum, it) => sum + it.price, 0);

  return (
    <section className="fbt">
      <h2 className="fbt__title">{title || "Frequently Bought Together"}</h2>

      <div className="fbt__wrap">
        <div className="fbt__cards">
          {items.map((it, idx) => (
            <div key={it.id} className="fbt__card">
              <img src={it.image} alt={it.title} className="fbt__img" />
              {idx < items.length - 1 && <div className="fbt__plus">+</div>}
            </div>
          ))}
        </div>

        <div className="fbt__summary">
          <ul className="fbt__list">
            {items.map((it, idx) => (
              <li key={it.id}>
                {idx === 0 && <b> Product:</b>} {it.title} —{" "}
                <b>${it.price.toLocaleString()}</b>
                {it.oldPrice && (
                  <span className="fbt__old">
                    {" "}
                    ${it.oldPrice.toLocaleString()}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="fbt__total">${total.toLocaleString()}</div>
          <button className="fbt__btn">ADD ALL TO CART</button>
        </div>
      </div>
    </section>
  );
}
