// src/pages/Home/NewArrivals/NewArrivals.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NewArrivals.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaSearch,
  FaHeart,
} from "react-icons/fa";
import AddToCartButton from "../../../Components/AddToCartButton/AddToCartButton";
import useWishlist from "../../../Context/useWishlist"; // عدّل المسار لو شجرتك مختلفة

const products = [
  {
    img: "https://img.freepik.com/free-photo/men-shoes_1203-8387.jpg?w=1480",
    tag: "HOT",
    title: "Nike Air Max Unisex SYSTM Men Sneaker...",
    price: "$148",
    rating: 4,
  },
  {
    img: "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-9-700x700.jpg",
    title: "100% UV Protected Sunglasses For Men",
    price: "$123",
    rating: 5,
  },
  {
    img: "https://img.freepik.com/premium-photo/illusory-gradient-skirt-pink-blue-white-realistic-usage-light-color_899449-319207.jpg?w=1480",
    title: "LV Women Leather Accent Denim Mini Skirt",
    price: "$1,390",
    rating: 4,
  },
  {
    img: "https://img.freepik.com/premium-photo/blue-warm-knitted-sweater-with-pattern-socks-isolate-white-warm-winter-clothes_362171-1014.jpg?w=1480",
    title: "A Different Knit Holiday Sweater",
    tag: "HOT",
    price: "$50 – $65",
    rating: 3,
  },
  {
    img: "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-1-700x700.jpg",
    title: "Winter New Jacket Loose Retro American...",
    tag: "HOT",
    price: "$160",
    rating: 4.5,
  },
  {
    img: "https://img.freepik.com/premium-photo/flat-front-view-ultra-realistic-grey-beanie-white-background-product-photography-studio_1045176-16615.jpg?w=1480",
    title: "Winter Hats with Top Ball Custom Design",
    price: "$17",
    rating: 4.5,
  },
  {
    img: "https://demothemesky-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-16-700x700.jpg",
    title: "Suit Custom Design",
    price: "$399",
    rating: 4.5,
  },
  {
    img: "https://img.freepik.com/premium-photo/beautiful-elegant-evening-women-s-dress-white-background_236836-20546.jpg?w=1480",
    title: "Wedding dress Custom Design",
    tag: "HOT",
    price: "$499",
    rating: 5,
  },
];

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return <span className="na-stars">{stars}</span>;
}

// يحوّل السعر النصّي إلى رقم (يأخذ أول رقم في النص)
function normalizePrice(value) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const m = value.match(/[\d.,]+/); // يلتقط أول رقم حتى لو فيه فواصل
    if (!m) return 0;
    return Number(m[0].replace(/,/g, ""));
  }
  return 0;
}

export default function NewArrivals() {
  const { add, remove, has } = useWishlist();

  const navigate = useNavigate(); // لفتح صفحة الوِشليست بعد الإضافة (اختياري)

  return (
    <div className="na-container">
      <h1>New Arrivals</h1>
      <nav className="na-categories">
        <button className="active">Fashion</button>

        <button onClick={() => navigate("/WOMAN")}>Phone & Tablet</button>
        <button onClick={() => navigate("/MAN")}>Home & Decor</button>
        <button onClick={() => navigate("/cosmetics")}>Beauty & Health</button>

        <button className="see-all" onClick={() => navigate("/Categories")}>
          See All Products
        </button>
      </nav>

      <div className="na-grid">
        {products.map((p, i) => {
          const id = `na-${i}`;

          // عنصر موحّد يشتغل مع ProductDetails/Wishlist/AddToCart
          const productForState = {
            id,
            title: p.title,
            price: normalizePrice(p.price),
            image: p.img,
            img: p.img,
            images: [p.img],
            rating: p.rating,
            brand: p.brand || "",
            sku: `SKU-${id}`,
          };

          const liked = has(id);

          const toggleWishlist = () => {
            if (liked) {
              remove(id);
            } else {
              add(productForState);

              navigate("/wishlist", { state: { justAdded: productForState } });
            }
          };

          return (
            <div className="na-card" key={id}>
              {p.tag && <span className="na-tag">{p.tag}</span>}

              <div className="na-img-wrapper">
                <Link
                  to={`/product/${id}`}
                  state={{ product: productForState }}
                >
                  <img src={p.img} alt={p.title} className="na-img" />
                </Link>
              </div>

              <div className="na-title">{p.title}</div>
              <div className="na-price">{p.price}</div>
              <StarRating rating={p.rating} />

              <div className="na-actions">
                <AddToCartButton
                  item={{
                    id,
                    title: p.title,
                    price: normalizePrice(p.price),
                    image: p.img,
                  }}
                  className="na-add-btn"
                  label="+ ADD TO CART"
                />

                <div className="na-actions-right">
                  <button
                    className="na-icon-btn"
                    title="Quick View"
                    type="button"
                  >
                    <FaSearch />
                  </button>

                  <button
                    className={`na-icon-btn ${liked ? "is-liked" : ""}`}
                    title={liked ? "Remove from Wishlist" : "Add to Wishlist"}
                    aria-pressed={liked}
                    onClick={toggleWishlist}
                    type="button"
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
