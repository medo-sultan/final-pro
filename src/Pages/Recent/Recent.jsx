import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Recent.css";

// Example product data set
const productSets = [
  [
    {
      id: 1,
      name: "Eye Shadow Palette, Natural Nudes, 0.19 Ounce",
      price: "$28",
      img: "https://img.freepik.com/free-photo/still-life-combination-makeup-textures_23-2150240958.jpg?t=st=1755023815~exp=1755027415~hmac=d314d6d2686459dd4548e6b331cabb68104cd9a711135c99d057f2568509bb4d&w=1060",
    },
    {
      id: 2,
      name: "Black Monogram Empreinte Leather Gold...",
      price: "$300",
      img: "https://img.freepik.com/free-vector/geometric-frame-with-initial_1217-1515.jpg?t=st=1755023922~exp=1755027522~hmac=a4e4e74a4430035b3840bfe5756316b95dc3bc2e7cfc91085cd30fcf240524cc&w=1060",
    },
    {
      id: 3,
      name: "Tonga on T-Shirt for Men, Women Short Sleeve Tee",
      price: "$43",
      img: "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448743.jpg?t=st=1755024129~exp=1755027729~hmac=954c11223b7bab6bad6546e75f5d6cd880f844d1c1c8dff116f6d5d5adebfa75&w=1060",
    },
    {
      id: 4,
      name: "Milo Brass And Black Metal Lamp Ø18cm x 30cm",
      price: "$82",
      img: "https://img.freepik.com/free-photo/front-view-black-gold-lamp-designed-decorated-exquisite-white-background_140725-15867.jpg?t=st=1755024195~exp=1755027795~hmac=20eaa54734ae8218f239790a425eed7d77aece9989912e03903107ccf4535c3c&w=1060",
      badge: "HOT",
    },
    {
      id: 5,
      name: "Athletics Embroidered Relaxed Hoodie",
      price: "$79–$89",
      img: "https://img.freepik.com/free-photo/crop-man-showing-holding-gesture_23-2147795518.jpg?t=st=1755024263~exp=1755027863~hmac=f97ac7fa6a4df652b53a3ef1eb59aaa9ba9343324704cd0882d0478cbe0e5767&w=1060",
      badge: "-34%",
    },
    {
      id: 6,
      name: "Computer Set HP All-in-one Intel Core i5 and...",
      price: "$86–$1,029",
      img: "https://img.freepik.com/premium-photo/desktop-computer-keyboard-mouse_488220-520.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
  ],
  [
    {
      id: 7,
      name: "Minimal Modern Table Lamp",
      price: "$150",
      img: "https://img.freepik.com/free-photo/rustic-white-lamp-minimal-living-room_53876-134415.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
      badge: "HOT",
    },
    {
      id: 8,
      name: "Classic Leather Handbag",
      price: "$210",
      img: "https://img.freepik.com/free-photo/black-bag-with-scarf_140725-6390.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 9,
      name: "Bluetooth Wireless Headphones",
      price: "$199",
      img: "https://img.freepik.com/premium-photo/high-angle-view-telephone-white-background_1048944-20000277.jpg?w=1060",
      badge: "-15%",
    },
    {
      id: 10,
      name: "Ultra HD 4K Smart TV",
      price: "$899",
      img: "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 11,
      name: "Modern Wooden Chair",
      price: "$320",
      img: "https://img.freepik.com/free-photo/vertical-shot-blue-chair-made-up-wooden-legs_181624-33152.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 12,
      name: "Smartphone Pro X",
      price: "$1,199",
      img: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722663.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
  ],
  [
    {
      id: 13,
      name: "Premium Watch Series 9",
      price: "$499",
      img: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722697.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 14,
      name: "Wireless Speaker",
      price: "$65",
      img: "https://img.freepik.com/free-photo/blurry-man-working-laptop-front-view_23-2149936201.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
      badge: "HOT",
    },
    {
      id: 15,
      name: "Gaming Keyboard RGB",
      price: "$120",
      img: "https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529372.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 16,
      name: "Compact Camera 24MP",
      price: "$650",
      img: "https://img.freepik.com/premium-photo/digital-photo-camera-isolated-white_392895-356922.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
      badge: "-10%",
    },
    {
      id: 17,
      name: "Yoga Mat Eco-friendly",
      price: "$30",
      img: "https://img.freepik.com/free-photo/still-life-yoga-equipment_23-2151725302.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 18,
      name: "Men's Casual Sneakers",
      price: "$75",
      img: "https://img.freepik.com/free-photo/gray-high-top-sneaker-white_53876-102243.jpg?uid=R210811545&ga=GA1.1.1884177848.1755013905&semt=ais_hybrid&w=740&q=80",
    },
  ],
];

function getRandomSet() {
  const idx = Math.floor(Math.random() * productSets.length);
  return productSets[idx];
}

function toProduct(item) {
  return {
    id: item.id,
    title: item.name,
    price: item.price,
    image: item.img,
    images: [item.img],
    discountBadge: item.badge,
    sku: `SKU-${item.id}`,
    categories: ["Recent", "Flash"],
    rating: 4.6,
    features: ["Feature 1", "Feature 2", "Feature 3"],
    stock: "In stock",
  };
}

export default function RecentDropdown() {
  const [open, setOpen] = useState(false);
  const [recentItems, setRecentItems] = useState(getRandomSet());
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setRecentItems(getRandomSet());
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [open]);

  const goDetails = (item) => {
    const product = toProduct(item);
    setOpen(false);
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="recent-dropdown-root" ref={ref}>
      <div
        className={`recent-dropdown-toggle${open ? " active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        Recently <span className="recent-dropdown-arrow">&#x25BC;</span>
      </div>

      {open && (
        <div className="recent-dropdown-menu">
          <div className="recent-dropdown-list">
            {recentItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="recent-dropdown-item"
                onClick={() => goDetails(item)}
              >
                <div className="recent-dropdown-img-wrap">
                  <img src={item.img} alt={item.name} />
                  {item.badge && (
                    <span
                      className={`recent-dropdown-badge ${
                        item.badge === "HOT" ? "hot" : "discount"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="recent-dropdown-info">
                  <div className="recent-dropdown-title">{item.name}</div>
                  <div className="recent-dropdown-price">{item.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
