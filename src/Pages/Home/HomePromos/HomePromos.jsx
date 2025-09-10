import "./HomePromos.css";

export default function HomePromos() {
  return (
    <div className="home-promos">
      {/* الكرت الأول */}
      <div className="promo-card small-card">
        <img
          src="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/banner3-demo1.jpg"
          alt="Tires Sale"
          className="promo-img"
        />
        <div className="promo-text">
          <span className="promo-subtitle">SALE 10% OFF</span>
          <h3 className="promo-title">TIRES MICHELIN</h3>
        </div>
      </div>

      <div className="promo-card promo-sofa">
        <div className="promo-text promo-center-text">
          <div className="promo-subtitle orange">NEW COLLECTION</div>
          <div className="promo-title black">Sofa Crafted in UK</div>
          <a href="/Furniture" className="promo-link">
            Shop now <span className="arrow">→</span>
          </a>
        </div>
        <img
          className="promo-img"
          src="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/banner4-demo1.jpg"
          alt="Sofa"
        />
      </div>

      {/* الكرت الثالث */}
      <div className="promo-card small-card">
        <img
          src="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/banner5-demo1.jpg"
          alt="Beauty"
          className="promo-img"
        />
        <div className="promo-text">
          <span className="promo-subtitle">Steals under $25</span>
          <h3 className="promo-title pink">Beauty</h3>
        </div>
      </div>
    </div>
  );
}
