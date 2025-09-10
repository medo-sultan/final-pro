import React from "react";

import "./Offers.css";
import FrequentlyBoughtTogether from "./Frequent/FrequentlyBoughtTogether";
import FlashDeals from "../Home/FlashDeals/FlashDeals";
import CashBackBanner from "../../Components/CashBackBanner/CashBackBanner";

/* بيانات مجموعات المنتجات */
const fbtGroups = [
  {
    title: "Frequently Bought Together",
    items: [
      {
        id: "ipad",
        title: "Apple iPad Pro 12.9-inch,",
        price: 1399,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-11-4.jpg",
      },
      {
        id: "iphone",
        title: "Apple iPhone 11 Pro, 256GB, Unlocked",
        price: 352,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-9.jpg",
      },
      {
        id: "watch",
        title: "Apple Watch Series 9 GPS 45mm, ASport Band",
        price: 890,
        oldPrice: 950,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-21.jpg",
      },
    ],
  },
  {
    title: "For the queen ",
    items: [
      {
        id: "Dress",
        title: "black",
        price: 1399,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-14.jpg",
      },
      {
        id: " glasses",
        title: "Apple  Black – Fully Unlocked",
        price: 352,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-9.jpg",
      },
      {
        id: " bag",
        title: "Aluminum Case with Sport Band",
        price: 890,
        oldPrice: 950,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-20-1.jpg",
      },
    ],
  },
  {
    title: "ساعة + نظارة",
    items: [
      {
        id: "watch2",
        title: "ساعة يد كلاسيكية للرجال",
        price: 320,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/electronic-16-1.jpg",
      },
      {
        id: "glass",
        title: "نظارة شمسية عصرية",
        price: 150,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-22.jpg",
      },
    ],
  },
  {
    title: "قميص + بنطلون",
    items: [
      {
        id: "shirt",
        title: "قميص رجالي قطن",
        price: 210,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-18.jpg",
      },
      {
        id: "pants",
        title: "  حذاء رياضي انيق",
        price: 180,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-20-2.jpg",
      },
    ],
  },
  {
    title: "شنطه + هوودي",
    items: [
      {
        id: "hat",
        title: " شنطه جلد ",
        price: 90,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-2.jpg",
      },
      {
        id: "scarf",
        title: " هوودي",
        price: 60,
        image:
          "https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/05/fashion-12-3.jpg",
      },
    ],
  },
];

/* العروض (كما هي) */
const offersData = [
  {
    id: 1,
    title: "خصم 30% على جميع المنتجات",
    description: "استمتع بخصم حصري على جميع المنتجات لفترة محدودة فقط.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    badge: "جديد",
  },
  {
    id: 2,
    title: "اشترِ 1 واحصل على 1 مجانًا",
    description: "عرض خاص: اشترِ منتجًا واحصل على الآخر مجانًا.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    badge: "عرض محدود",
  },
  {
    id: 3,
    title: "توصيل مجاني للطلبات فوق 500 جنيه",
    description: "لا تدع الفرصة تفوتك! توصيل مجاني لجميع الطلبات الكبيرة.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    badge: "توصيل مجاني",
  },
];

function Offers() {
  return (
    <section className="offers-container" dir="rtl">
      <h2 className="offers-title">العروض الحالية</h2>
      <div className="offers-list">
        {offersData.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <div className="offer-img-wrapper">
              <img src={offer.image} alt={offer.title} className="offer-img" />
              <span className="offer-badge">{offer.badge}</span>
            </div>
            <div className="offer-content">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-desc">{offer.description}</p>
              <button className="offer-btn">استفد الآن</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PromoSections() {
  return (
    <div className="promo-page">
      {/* كرر كل مجموعة منتجات مع نفس المكون */}
      <Offers />
      {fbtGroups.map((group, idx) => (
        <FrequentlyBoughtTogether
          key={idx}
          title={group.title}
          items={group.items}
        />
      ))}
      <CashBackBanner />
      <FlashDeals />
      {/* <HomePromos />
      <NewArrivals /> */}
    </div>
  );
}
