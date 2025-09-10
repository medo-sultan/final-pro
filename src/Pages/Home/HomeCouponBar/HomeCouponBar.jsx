import React from "react";
import "./HomeCouponBar.css";

export default function HomeCouponBar() {
  return (
    <div className="coupon-bar">
      <span>
        Super discount for your <strong>first purchase</strong>{" "}
        <span className="coupon-code">COUPON25</span> Use discount code in the
        checkout!
      </span>
    </div>
  );
}
