import React, { useRef, useEffect } from "react";
import "./HomeCircles.css";

const items = [
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/cosmetic-cat-7.jpg",
    label: "Makeup",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-4.jpg",
    label: "Autopart",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-5.jpg",
    label: "Laptop & Computer",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-6.jpg",
    label: "Fashion",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-7.jpg",
    label: "Headphones",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-8.jpg",
    label: "HandBags",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-1.jpg",
    label: "Smartphone",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-2.jpg",
    label: "Home & Decor",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/cosmetic-cat-7.jpg",
    label: "Makeup",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-4.jpg",
    label: "Autopart",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-5.jpg",
    label: "Laptop & Computer",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-6.jpg",
    label: "Fashion",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-7.jpg",
    label: "Headphones",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-8.jpg",
    label: "HandBags",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-1.jpg",
    label: "Smartphone",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/cosmetic-cat-7.jpg",
    label: "Makeup",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-4.jpg",
    label: "Autopart",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-5.jpg",
    label: "Laptop & Computer",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-6.jpg",
    label: "Fashion",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-7.jpg",
    label: "Headphones",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-8.jpg",
    label: "HandBags",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-1.jpg",
    label: "Smartphone",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-2.jpg",
    label: "Home & Decor",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/cosmetic-cat-7.jpg",
    label: "Makeup",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-4.jpg",
    label: "Autopart",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-5.jpg",
    label: "Laptop & Computer",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-6.jpg",
    label: "Fashion",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-7.jpg",
    label: "Headphones",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-8.jpg",
    label: "HandBags",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-1.jpg",
    label: "Smartphone",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/cosmetic-cat-7.jpg",
    label: "Makeup",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-4.jpg",
    label: "Autopart",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-5.jpg",
    label: "Laptop & Computer",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-6.jpg",
    label: "Fashion",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-7.jpg",
    label: "Headphones",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-8.jpg",
    label: "HandBags",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-1.jpg",
    label: "Smartphone",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-2.jpg",
    label: "Home & Decor",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/cosmetic-cat-7.jpg",
    label: "Makeup",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-4.jpg",
    label: "Autopart",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-5.jpg",
    label: "Laptop & Computer",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-6.jpg",
    label: "Fashion",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-7.jpg",
    label: "Headphones",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-8.jpg",
    label: "HandBags",
  },
  {
    img: "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/04/cat-1.jpg",
    label: "Smartphone",
  },
];

export default function HomeCircles() {
  const rowRef = useRef(null);

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // تحريك تلقائي كل 10 ثواني
  useEffect(() => {
    const interval = setInterval(scrollRight, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-circles-wrapper">
      <div className="home-circles-container" ref={rowRef}>
        {items.map((item, idx) => (
          <div className="circle-item" key={idx}>
            <div className="circle-img-holder">
              <img src={item.img} alt={item.label} />
              <span className="circle-arrow" onClick={scrollRight}>
                ➜
              </span>
            </div>
            <div className="circle-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
