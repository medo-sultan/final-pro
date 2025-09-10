import React from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./Context/CartProvider";
import WishlistProvider from "./Context/Wishlist/WishlistProvider"; // ← التعديل هنا

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </React.StrictMode>
);
